const knex = require('knex');

const UsersService = {
    getUser(db, id){
        return db('users')
            .where({id})
            .first()
    },
    postUser(db, user){
        return db
            .insert(user)
            .into('users')
            .returning('*')

    },
}

module.exports = UsersService