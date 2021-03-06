const router = require('express').Router();
const { Tournament, Round, Match, Score, User, Team } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all tournaments and JOIN with user data
    const tournamentData = await Tournament.findAll({});

    // Serialize data so the template can read it
    const tournaments = tournamentData.map((tournament) => tournament.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      tournaments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tournaments', async (req, res) => {
  try {
    // Get all tournaments and JOIN with user data
    const tournamentData = await Tournament.findAll({
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const tournaments = tournamentData.map((tournament) => tournament.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('tournaments', {
      tournaments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tournaments/:id', async (req, res) => {
  try {
    const tournamentData = await Tournament.findOne({
      where: { id: req.params.id },
      include: [{
        model: Round,
        attributes: { exclude: ['tournament_id'] },
        include: [{
          model: Match,
          include: [
            { model: Score },
            { model: Team, through: Score },
          ]
        }]
      }]
    });

    const tournament = tournamentData.get({ plain: true });

    res.render('singleTournament', {
      ...tournament,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tournament }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/profile', async (req, res) => {
  try {
    console.log(req.body);
    const tournamentData = await Tournament.create(req.body);
    res.status(200).json(tournamentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
