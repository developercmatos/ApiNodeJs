var connection = require('../../config/dbConnection');

var portfolioDAO = function (portfolio) {
    this.descricao = portfolio.descricao;
    this.detalhes = portfolio.detalhes;
};
//Buscando todos os portfólios
module.exports = consultarTodosOsPortfolios = function (result) {
    connection.query('SELECT * FROM portfolio', function (err, res) {
        if (err)
            result(err, null);
        else
            result(null, res);
    });
};

//Adicionando o portfólio
module.exports = adicionarPortfolios = function (portfolio, result) {
    connection.query('INSERT INTO porfolio  SET ?', portfolio, function (err, res) {
        if (err) {
            result({ message: "Erro ao tentar cadastrar portfólio" });
        }
        else {
            result({ message: "Cadastro de portfólio realizado com sucesso!" });
        }
    });
};

