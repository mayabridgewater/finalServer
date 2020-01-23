const {connection} = require('./config');

function newGame(user) {
    return new Promise((resolve, reject) => {
        connection.query(`call new_game(?, ?)`, [user.name, user.range], function(error, results, fields) {
            if (error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    newGame
}