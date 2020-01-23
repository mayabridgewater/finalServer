var express = require('express');
var router = express.Router();

const {getGuesses, addGuess, updateGuessAmount} = require('../db/guess');

router.get('/:id', async function(req, res, next) {
    try {
        const guesses = await getGuesses(req.params.id);
        res.status(200).json(guesses)
    }catch(error) {
        res.status(500).json(error)
    }
})

router.put('/', async function(req, res, next) {
    try {
        await addGuess(req.body.guess, req.body.id);
        await updateGuessAmount(req.body.id);
        res.status(200).json('guesses updated')
    }catch(error) {
        res.status(500).json(error)
    }

})

module.exports = router