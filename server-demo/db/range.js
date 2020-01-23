const {connection} = require('./config');

function getRange(id) {
    return new Promise((resolve, reject) => {
        connection.query('select `range` from game_history where player_id = ? order by `date` desc limit 1', [id], function(error, results, fields) {
            if (error) {
                reject(error)
            }else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    getRange
}