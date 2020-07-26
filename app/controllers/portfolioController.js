const portfolioDAO = require('../models/portfolioDao');


//Consultar todos os portfolios
exports.consultarTodosOsPortfolios = function(req, res) {

    module.exports = consultarTodosOsPortfolios(function (err, portfolio) {
        if (err)
            return res.status(400).send(err);
        else
            return res.status(200).json(portfolio);
    })
};

//Adicionando Portfolio
exports.adicionarPortfolios = function (req, res) {
    var portfolio = new portfolioDAO(req.body);

    if (!portfolio.descricao)
        res.status(400).send({ code: 400, message: 'O campo descrição é obrigatório' });
    if (!portfolio.detalhes)
        res.status(400).send({ code: 400, message: 'O campo detalhes é obrigatório' });

        module.exports = adicionarPortfolios(portfolio, function (err, result) {
        if (err)
            res.send(err);
        res.status(201).json(result);
    })
};