const express = require('express'); // get express
const connectDB = require('./config/db');
const auth = require('./midleware/auth');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationRseult } = require('express-validator/check');

const app = express(); // intilize app var

// connect database

connectDB();

// Init MIddleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running')); // end point

// define routes

app.use('/api/auth', require('./routes/auth'));

app.use('/api/profile', require('./routes/profile'));
// app.use("/api/post", require("./routes/api/post"));

app.use('/api/profile', require('./routes/user'));
// app.use("/api/users", require("./routes/api/users"));

// defining the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serveur started on port ${PORT}`));
