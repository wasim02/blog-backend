const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: Date,
    author: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        title: String
    },
    comments: [{
        name: String,
        likes: Number,
        dislikes: Number,
        date: Date,
        comment: String
    }]
});

const blog = mongoose.model('Blog', blogSchema);
module.exports = blog;