const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes/blogs');
const careerRoutes = require('./routes/careers');
const coursebeginRoutes = require('./routes/coursebegin');
const courseintermediateRoutes = require('./routes/courseintermediate')
const courseexpertRoute = require('./routes/courseexpert')
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api', blogRoutes);
app.use('/api', careerRoutes);
app.use('/api', coursebeginRoutes);
app.use('/api', courseintermediateRoutes);
app.use('/api', courseexpertRoute);

module.exports = app;
