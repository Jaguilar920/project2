const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2'

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride('_method'));

app.listen(PORT)