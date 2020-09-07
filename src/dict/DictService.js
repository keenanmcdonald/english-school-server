const knex = require('knex');
const fetch = require('node-fetch')
const config = require('../config')

const DictService = {
    search(db, search_term){
        return db('dict')
            .select(['item', 'description'])
            .where('item', 'ilike', search_term)
    },
    getExample(word){
        const url = config.OXFORD_API_ADDRESS + 'sentences/en/' + word.item + '?strictMatch=true'
        console.log('url', url)
        return fetch(url, {
            method: 'GET',
            mode:'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'app_key': config.OXFORD_API_KEY,
                'app_id': config.OXFORD_API_ID
            }
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log('example sentences', res)
            word.exampleData = res
            return word
        })
    },
    async getExamples(words){
        console.log('words', words)
        const examplePromises = words.map(word => this.getExample(word))
        console.log('get examples called', examplePromises)
        return await Promise.all(examplePromises)
    }
}

module.exports = DictService