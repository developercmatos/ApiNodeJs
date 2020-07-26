var portfolioController = require('../controllers/portfolioController.js');

module.exports = function (app) {
    app.get('/portfolio', portfolioController.consultarTodosOsPortfolios)
        .post('/portfolio', portfolioController.adicionarPortfolios);

};