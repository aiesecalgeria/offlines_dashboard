const express = require('express');
const router = express.Router();

// @route   POST api/user
// @desc    register user
// @acess   Public

router.post('/', (req, res) => res.send('user route'));

module.exports = router;
