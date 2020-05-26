const express = require('express');
const characterController = express.Router();
const Character = require('../models/characters.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};



/////////
//ROUTES
/////////


/*  Index  */
characterController.get('/', isAuthenticated, (req, res) => {
    Character.find({}, (error, allFruits) => {
        console.log(req.session);
        res.render('Index', {
            characters: allCharacters,
            username: req.session.currentUser,
        });
    });
});

/*  New  */
characterController.get('/new', isAuthenticated, (req, res) => {
    res.render('New');
});

/*  Create  */
characterController.post('/', (req, res) => {
    if (req.body.track === 'on') {
        req.body.track = true;
    } else {
        req.body.track = false;
    }
    Character.create(req.body, (error, createdCharacter) => {
        res.redirect('/dnd');
    });
});


/*  Delete  */
characterController.delete('/:id', isAuthenticated, (req, res) => {
    Character.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/dnd');
    });
});

/*  Show  */
characterController.get('/:id', isAuthenticated, (req, res) => {
    Character.findById(req.params.id, (error, foundCharacter) => {
        res.render('Show', {
            character: foundCharacter,
        });
    });
});

/*  Edit  */
characterController.get('/edit/:id', isAuthenticated, (req, res) => {
    Character.findById(req.params.id, (error, foundCharacter) => {
        res.render('Edit', { character: foundCharacter });
    });
});



/*  update  */
characterController.put('/edit/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Character.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/dnd');
    });
});


module.exports = characterController;
