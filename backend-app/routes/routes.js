const controller = require( '../controllers/defaultController');

const routes = [
    {
      method: 'GET',
      url: '/api/articles',
      handler: controller.getArticles,
    },
  ]
  
  module.exports = routes