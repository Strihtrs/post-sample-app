const Mongoose = require('mongoose');

const articleSchema = new Mongoose.Schema({
    userId: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content_preview: String,
    content: String,
    created_date: { type: Date, default: Date.now, index: true },
    updated_date: Date,
    deleted_date: Date,
    hidden: Boolean,
    language: String,
    comments: [
        {
            title: String,
            content: String,
            author: String,
            published_date: Date
        }
    ]
});

module.exports = Mongoose.model('Article', articleSchema);
