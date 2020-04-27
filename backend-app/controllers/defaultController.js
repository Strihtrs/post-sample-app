const boom = require('boom');

const Article = require('../models/Article');

async function getArticles(req, reply) {
    try {

        let langFilterExpr = setFilterExpression(req);
        let paging = getPagingOptions(req);
        let fieldsToSelect = {title: 1, content_preview: 1, created_date: 1, language: 1};

        const articles = await Article.find(langFilterExpr, fieldsToSelect, paging).sort({created_date: -1});
        return articles;

    } catch(err) {

        throw boom.boomify(err);
    }

    function setFilterExpression(req) { 
        return req.query.lang ? { language: req.query.lang } : { }; 
    }

    function getPagingOptions(req) {
        return req.query.page ? { skip: 1 * req.query.page, limit: 1 } : { };
    }
}

module.exports = { getArticles };