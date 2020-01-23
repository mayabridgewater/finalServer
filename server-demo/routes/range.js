var express = require('express');
var router = express.Router();

const {getRange} = require('../db/range');

router.get('/:id', async function(req, res, next) {
    console.log(req.params)
    try {
        const range = getRange(req.params.id);
        res.status(200).json(range)
    }catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router
