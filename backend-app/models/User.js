const Mongoose = require('mongoose');

const usersSchema = new Mongoose.Schema({
    login: String,
    password: String,
    email: String,
    last_login_date: Date,
    articles: [{ type: Number, ref: 'Article' }]
});

module.exports = Mongoose.model('User', usersSchema);