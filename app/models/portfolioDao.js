var connection = require('../../config/dbConnection');

var portfolioDAO = function (portfolio) {
    this.id_portfolio = portfolio.id_portfolio;
    this.descricao = portfolio.descricao;
    this.detalhes = portfolio.detalhes;
};

//Buscando todos os portfólios
portfolioDAO.consultarTodosOsPortfolios = function (result) {
    connection.query('SELECT * FROM portfolio', function (err, res) {
        if (err)
            result(err, null);
        else
            result(null, res);
    });
};
