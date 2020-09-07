const express = require('express')
const DictService = require('./DictService')

const dictRouter = express.Router()
const jsonBodyParser = express.json()


dictRouter
    .route('/search/:search_term')
    .get((req, res) => {
        DictService.search(req.app.get('db'), req.params.search_term)
            .then(entries => {
                return DictService.getExamples(entries)
                    .then(entries => {
                        return res.status(200).send(entries)
                    })
            })
    })



module.exports = dictRouter