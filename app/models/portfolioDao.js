var connection = require('../../config/dbConnection');


//Buscando todos os portfólios
module.exports = consultarTodosOsPortfolios = function (result) {
    connection.query('SELECT * FROM portfolio', function (err, res) {
        if (err)
            result(err, null);
        else
            result(null, res);
    });
};


