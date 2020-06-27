const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use('/style', express.static(path.resolve(__dirname, 'style')));
app.use('/scripts', express.static(path.resolve(__dirname, 'scripts')));
app.use('/sketch', express.static(path.resolve(__dirname, 'sketch.js')));
app.use('/images', express.static(path.resolve(__dirname, 'images')));
app.use('/sounds', express.static(path.resolve(__dirname, 'sounds')));

app.get('/', (request, response) =>
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
);

app.listen(3333);