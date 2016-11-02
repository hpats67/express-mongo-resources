const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Character = require('../models/bookchar');

router
    .post('/', bodyParser, (req, res, next)=> {
        new Character(req.body).save()
        .then(saved => res.send( saved ))
        .catch(next);
    })

    .get('/', (req, res, next) => {
        const query = {}; 

        if(req.query.name) query.name = req.query.name;

        Character.find(query)
            .then(characters => res.send(characters ))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Character.findById(req.params.id)
            .then(character => res.send(character ))
            .catch(next);
    })

    .put('/', bodyParser, (req, res, next)=> {
        new Character(req.body).save()
            .then(saved => res.send(saved ))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
    Character.removeById(req.params.id)
        .then(deleted => res.send(deleted ))
        .catch(next);
    })

    
module.exports = router;