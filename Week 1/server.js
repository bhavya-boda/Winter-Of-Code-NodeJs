const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/emails', emailRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://user:pass@cluster0.rmsaf.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
