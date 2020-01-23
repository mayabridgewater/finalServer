const {connection} = require('./config');

function getGuesses(id) {
    return new Promise((resolve, reject) => {
        connection.query('select guesses from game_history where player_id = ? order by `date` desc limit 1', [id], function(error, results, fields) {
            if(error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
};

function addGuess(guess, id) {
    return new Promise((resolve, reject) => {
        connection.query('update game_history set guesses = ? where player_id = ? order by `date` desc limit 1', [guess, id], function(error, results, fields) {
            if(error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

function updateGuessAmount(id) {
    return new Promise((resolve, reject) => {
        connection.query('update game_history set amount_of_guesses = amount_of_guesses + 1 where player_id = ? order by `date` desc limit 1', [id], function(error, results, fields) {
            if (error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    getGuesses,
    addGuess,
    updateGuessAmount
}