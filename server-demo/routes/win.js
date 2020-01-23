var express = require('express');
var router = express.Router();

const {addWin} = require('../db/win');

router.put('/', async function(req, res, next) {
    try {
        await addWin(req.body.win, req.body.id);
        res.status(200).json('winning number updated')
    }catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router