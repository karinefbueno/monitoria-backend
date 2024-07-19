const { productRouter } = require('./routes');

const express = require('express');

const app = express();
app.use(express.json());


app.use('/products', productRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;

