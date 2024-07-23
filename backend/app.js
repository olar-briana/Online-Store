const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('User', {
    // Model attributes
});

const Product = sequelize.define('Product', {
    // Model attributes
});

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    });

app.get('/', (req, res) => {
    res.send('Welcome to Brilux Store API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
