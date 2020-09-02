const express = require('express')
const WordsService = require('./WordsService')

const wordsRouter = express.Router()
const jsonBodyParser = express.json()


wordsRouter
    .route('/:user_id')
    .get((req, res) => {
        WordsService.getWords(req.app.get('db'), req.params.user_id)
            .then(words => {
                return res.status(200).send(words)
            })
    })
    .post(jsonBodyParser, (req, res) => {
        WordsService.addWord(req.app.get('db'), req.params.user_id, req.body.word)
            .then(words => {
                return res.status(201).send(words)
            })
    })



module.exports = wordsRouter