const router = require('express').Router();
const { Tournament, Match, Team } = require('../../models');
const withAuth = require('../../utils/auth');

// api/tournaments

router.get('/', async (req, res) => {
    // find all tournaments
    try {
        const tournamentData = await Tournament.findAll({});
        res.status(200).json(tournamentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one tournament
router.get('/:id', async (req, res) => {
    // find a single tournament by its `id`
    try {
        const tournamentData = await Tournament.findOne({
            where: { id: req.params.id },
            include: [{ 
                model: Round,
                include: [{
                    model: Match,
                    include: [
                        { model: Score },
                        { model: Team, through: Score}
                    ]
                }],
            }]
        });
        res.status(200).json(tournamentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new tournament
router.post('/', async (req, res) => {
    try {
        const tournamentData = await Tournament.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(tournamentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update tournament
router.put('/:id', async (req, res) => {
    // update tournament data
    try {
        const tournamentData = await Tournament.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(tournamentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete one tournament by its `id` value
    try {
        const tournamentData = await Tournament.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!tournamentData) {
            res.status(404).json({ message: 'No tournament found with this id!' });
            return;
        }

        res.status(200).json(tournamentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
