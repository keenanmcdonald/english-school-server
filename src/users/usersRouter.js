const express = require('express')
const UsersService = require('./UsersService')

const usersRouter = express.Router()
const jsonBodyParser = express.json()


usersRouter
    .route('/')
    .post(jsonBodyParser, (req, res) => {
        UsersService.postUser(req.app.get('db'), req.body.user)
            .then(user => {
                return res.status(201).send(user)
            })
    })

usersRouter
    .route('/:id')
    .get((req, res) => {
        UsersService.getUser(req.app.get('db'), req.params.id)
            .then(user =>{
                return res.status(200).send(user)
            })
    })


module.exports = usersRouter