const {connection} = require('./config');

function addWin(num, id) {
    return new Promise((resolve, reject) => {
        connection.query('update game_history set player_number = ? where player_id = ? order by `date` desc limit 1', [num, id], function(error, results, fields) {
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