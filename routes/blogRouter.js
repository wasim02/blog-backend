const express = require('express');
const blogRouter = express.Router();
const Blogs = require('../models/blog');

blogRouter.route('/')
    .get((req, res) => {
        res.send({ id: 1,title: 'My Blog' })
    })
    .post((req, res) => {
        res.send('Blog Posted');
    })
    .put((req, res) => {
        res.send('Cannot perform put operation on this endpoint');
    })
    .delete((req, res) => {
        res.send('All Blogs Deleted');
    })



module.exports = blogRouter;