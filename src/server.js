const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'style')));
app.use('/images', express.static(path.resolve(__dirname, 'images')));
app.use('/sounds', express.static(path.resolve(__dirname, 'sounds')));

app.listen(3333);