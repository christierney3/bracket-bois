const router = require('express').Router();
const { Match } = require('../../models');
const withAuth = require('../../utils/auth');

// api/matches

router.get('/', async (req, res) => {
    // find all matches
    try {
        const matchData = await Match.findAll({});
        res.status(200).json(matchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one match
router.get('/:id', async (req, res) => {
    // find a single match by its `id`
    try {
        const matchData = await Match.findByPk(req.params.id);
        res.status(200).json(matchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new match
router.post('/', async (req, res) => {
    try {
        const matchData = await Match.create(req.body);
        res.status(200).json(matchData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update match
router.put('/:id', async (req, res) => {
    // update match data
    try {
        const matchData = await Match.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(matchData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete one match by its `id` value
    try {
        const matchData = await Match.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!matchData) {
            res.status(404).json({ message: 'No match found with this id!' });
            return;
        }

        res.status(200).json(matchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
