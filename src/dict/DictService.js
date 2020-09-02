const knex = require('knex');

const DictService = {
    search(db, search_term){
        return db('dict')
            .select(['item', 'description'])
            .where('item', 'ilike', search_term)
    },
}

module.exports = DictService