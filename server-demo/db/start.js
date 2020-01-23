const {connection} = require('./config');

function newPlayer(firstName, lastName) {
    return new Promise((resolve, reject) => {
        connection.query('call new_player(?,?)', [firstName, lastName], function(error, results, fields) {
            if (error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

function newGame(id, range) {
    return new Promise((resolve, reject) => {
        connection.query(`call new_game(?, ?)`, [id, range], function(error, results, fields) {
            if (error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    newPlayer,
    newGame
}