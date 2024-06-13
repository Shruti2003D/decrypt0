const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://admin:admin1234@mentorbot.6ggoacm.mongodb.net/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
