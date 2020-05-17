const express = require('express');
const app = express();
const blogRouter = require('./routes/blogRouter');

app.use(express.json());

app.use('/blogs', blogRouter);

app.listen(4400, () => console.log('Server running on port 4400'));



