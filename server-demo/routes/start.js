var express = require('express');
var router = express.Router();

const {newGame} = require('../db/start')

router.post('/', async function(req, res, next) {
  try {
    await newGame(req.body);
    res.status(200).json('user added')
  }catch(error) {
    res.status(500).json({error: error.message})
  }
});

module.exports = router;
