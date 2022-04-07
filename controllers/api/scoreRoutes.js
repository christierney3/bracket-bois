const router = require('express').Router();
const { Score } = require('../../models');
const withAuth = require('../../utils/auth');

// api/scores

router.get('/', withAuth, async (req, res) => {
    // find all scores
    try {
        const scoreData = await Score.findAll({});
        res.status(200).json(scoreData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one score
router.get('/:id', withAuth, async (req, res) => {
    // find a single score by its `id`
    try {
        const scoreData = await Score.findByPk(req.params.id);
        res.status(200).json(scoreData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new score
router.post('/', async (req, res) => {
    try {
        const scoreData = await Score.create(req.body);
        res.status(200).json(scoreData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update score
router.put('/:id', withAuth, async (req, res) => {
    // update score data
    try {
        const scoreData = await Score.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(scoreData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    // delete one score by its `id` value
    try {
        const scoreData = await Score.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!scoreData) {
            res.status(404).json({ message: 'No score found with this id!' });
            return;
        }

        res.status(200).json(scoreData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
