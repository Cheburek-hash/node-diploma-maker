const db = require('../server/db');

class User {
  
    async isUserExists(email){
        return (await db.query(`SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);`, [email])).rows[0].exists;
    }

    async findOne(email){
        return (await db.query(`SELECT * FROM users WHERE email = $1`, [email])).rows[0] 
    }

    async login(){

    }
    async create(name, email, password){
       
        return (await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, 
            [name, email, password]
            )).rows;
        
    }
    async getAll(){
        return (await db.query(`SELECT * FROM users`)).rows;
    }
}

module.exports = new User();


