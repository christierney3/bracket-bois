const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');

// api/teams

router.get('/', withAuth, async (req, res) => {
    // find all teams
    try {
        const teamData = await Team.findAll({});
        res.status(200).json(teamData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one team
router.get('/:id', withAuth, async (req, res) => {
    // find a single team by its `id`
    try {
        const teamData = await Team.findByPk(req.params.id);
        res.status(200).json(teamData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new team
router.post('/', async (req, res) => {
    try {
        const teamData = await Team.create(req.body);
        res.status(200).json(teamData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update team
router.put('/:id', withAuth, (req, res) => {
    // update team data
    try {
        const teamData = await Team.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(teamData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    // delete one team by its `id` value
    try {
        const teamData = await Team.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!teamData) {
            res.status(404).json({ message: 'No team found with this id!' });
            return;
        }

        res.status(200).json(teamData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
