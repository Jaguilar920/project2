const bcrypt = require('bcryptjs');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

    /*  get  */
    users.get('/new', (req, res) => {
    res.render('users/New');
});

    /*  post  */
    users.post('/', (req, res) => {
    console.log(req.body);
    req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
    );

    /*  create  */
    User.create(req.body, (err, createdUser) => {
        res.redirect('/dnd');
    });
});
module.exports = users;