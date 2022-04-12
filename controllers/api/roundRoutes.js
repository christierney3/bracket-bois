const router = require('express').Router();
const { Round } = require('../../models');
const withAuth = require('../../utils/auth');

// api/rounds

router.get('/', async (req, res) => {
    // find all rounds
    try {
        const roundData = await Round.findAll({});
        res.status(200).json(roundData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one round
router.get('/:id', async (req, res) => {
    // find a single round by its `id`
    try {
        const roundData = await Round.findByPk(req.params.id);
        res.status(200).json(roundData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new round
router.post('/', async (req, res) => {
    try {
        const roundData = await Round.create(req.body);
        res.status(200).json(roundData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update round
router.put('/:id', async (req, res) => {
    // update round data
    try {
        const roundData = await Round.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(roundData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete one round by its `id` value
    try {
        const roundData = await Round.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!roundData) {
            res.status(404).json({ message: 'No round found with this id!' });
            return;
        }

        res.status(200).json(roundData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
