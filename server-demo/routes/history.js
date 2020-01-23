var express = require('express');
var router = express.Router();

const {getHistory} = require('../db/history');

router.get('/:id', async function(req, res, next) {
  try {
    const history = await getHistory(req.params.id);
    res.status(200).json(history)
  }catch(error) {
      res.status(500).json(error)
  }
});

module.exports = router;
