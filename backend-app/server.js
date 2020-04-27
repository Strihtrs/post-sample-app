const connect = require('./connect.js');
const port = process.env.PORT || "8000";

const fastify = require('fastify') ({ logger: true });
fastify.register(require('fastify-cors'), { });

// Connect to DB
connect.connect();

const routes = require('./routes/routes.js');

routes.forEach((route) => {
    fastify.route(route);
});

const start = async () => {
    try {
        await fastify.listen(port);
        fastify.log.info(`Server listening on ${fastify.server.address().port}.`);

    } catch(err) {

        fastify.log.error(err);
        process.exit(1);
    }
}

start();