const {connection} = require('./config');

function addWin(num, id) {
    return new Promise((resolve, reject) => {
        connection.query('update game_history set player_number = ? where id = ?', [num, id], function(error, results, fields) {
            if(error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    addWin
}