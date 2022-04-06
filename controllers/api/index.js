const router = require('express').Router();

// require all route files and assign to variables
const matchRoutes = require('./matchRoutes');
const playerRoutes = require('./playerRoutes');
const roundRoutes = require('./roundRoutes');
const scoreRoutes = require('./scoreRoutes');
const teamRoutes = require('./teamRoutes');
const tournamentRoutes = require('./tournamentRoutes');
const userRoutes = require('./userRoutes');

// relate all api paths to route file variables
router.use('/matches', matchRoutes);
router.use('/players', playerRoutes);
router.use('/rounds', roundRoutes);
router.use('/scores', scoreRoutes);
router.use('/teams', teamRoutes);
router.use('/tournaments', tournamentRoutes);
router.use('/users', userRoutes);


module.exports = router;
