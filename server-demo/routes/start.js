var express = require('express');
var router = express.Router();

const {newPlayer, newGame} = require('../db/start')

router.post('/', async function(req, res, next) {
  if(req.body.id) {
    try {
      const start = await newGame(req.body.id, req.body.range);
      res.status(200).json('game started')
    }catch(error) {
      res.status(500).json({error: error.message})
    }
  }else {
    try {
      const player = await newPlayer(req.body.first_name, req.body.last_name);
      const start = await newGame(player[0][0].id, req.body.range);
      res.cookie('player', JSON.stringify(player[0][0]), {maxAge: 1000 * 60 *60 *24})
      res.status(200).json('user added')
    }catch(error) {
      res.status(500).json({error: error.message})
    }
  }
});

module.exports = router;
