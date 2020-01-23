const {connection} = require('./config');

function getRange(id) {
    return new Promise((resolve, reject) => {
        connection.query('select `range` from game_history where id = ?', [id], function(error, results, fields) {
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