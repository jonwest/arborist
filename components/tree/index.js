const router = require('express').Router();
const tree = require('./tree');

router.get('/', tree);

module.exports = router;
