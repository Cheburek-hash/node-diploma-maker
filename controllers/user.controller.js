const db = require('../server/db');

class UserController {

    async createUser(req, res){
        const {name, email, password} = req.body;

        res.send(
            await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, 
            [name, email, password]
        ));
    }
    async getUsers(req, res){
        res.send(
            await db.query(`SELECT * FROM users`)
        );
    }
    async getOneUser(req, res){
        res.send(
            await db.query(`SELECT * FROM users WHERE id = $1`, [req.params.id])
        );
    }
    async updateUser(req, res){
        
    }
    async deleteUser(req, res){
        
    }
  

}

module.exports = new UserController();







