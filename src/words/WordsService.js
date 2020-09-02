const knex = require('knex');

const WordsService = {
    getWords(db, user_id){
        return db('users')
            .select('study_words')
            .where('id', user_id)        
    },
    addWord(db, user_id, word){
        return db('users')
            .where('id', user_id)
            .select('study_words')
            .then(result => {
                const study_words = result[0].study_words
                if (!study_words.includes(word)){
                    study_words.push(word)
                }
                return db('users')
                    .where('id', user_id)
                    .update('study_words', study_words)
                    .returning('study_words')
            })
    },
}

module.exports = WordsService