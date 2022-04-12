const router = require('express').Router();
const { Player } = require('../../models');
const withAuth = require('../../utils/auth');

// api/players

router.get('/', async (req, res) => {
    // find all players
    try {
        const playerData = await Player.findAll({});
        res.status(200).json(playerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one player
router.get('/:id', async (req, res) => {
    // find a single player by its `id`
    try {
        const playerData = await Player.findByPk(req.params.id);
        res.status(200).json(playerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new player
router.post('/', async (req, res) => {
    try {
        const playerData = await Player.create(req.body);
        res.status(200).json(playerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update player
router.put('/:id', async (req, res) => {
    // update player data
    try {
        const playerData = await Player.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(playerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete one player by its `id` value
    try {
        const playerData = await Player.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!playerData) {
            res.status(404).json({ message: 'No player found with this id!' });
            return;
        }

        res.status(200).json(playerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
