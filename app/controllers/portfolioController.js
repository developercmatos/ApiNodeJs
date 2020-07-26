const portfolioDAO = require('../models/portfolioDao');

exports.consultarTodosOsPortfolios = function(req, res) {

    module.exports = consultarTodosOsPortfolios(function (err, portfolio) {
        if (err)
            return res.status(400).send(err);
        else
            return res.status(200).json(portfolio);
    })
};