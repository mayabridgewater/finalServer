const {connection} = require('./config');

function getHistory(id) {
    return new Promise((resolve, reject) => {
        connection.query('select * from game_history where player_id = ?', [id], function(error, results, fields) {
            if(error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    getHistory
}