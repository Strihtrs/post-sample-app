const mongoose = require('mongoose');
const env = require('./environment.js').env;

const mongoUri = `mongodb://${env.connName}:${env.key}@${env.connName}.mongo.cosmos.azure.com:${env.port}/${env.dbName}?ssl=true&replicaSet=globaldb`;

function connect() {

    mongoose.connect(mongoUri, { useNewUrlParser: true })
        .then(() => console.log('MongoDB connected…'))
        .catch(err => console.log(err));
}

module.exports = { connect };