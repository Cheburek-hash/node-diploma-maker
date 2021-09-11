const { errors } = require('../models/User');
const User = require('../models/User');


class UserController {
    
    async createUser(req, res){
        try {
 
            const {name, email, password} = req.body;
            if (!name||!email||!password){
                
                    User.errors.push({error : {message: "Fields cannot be empty!"}})
            }
            else if (password.length < 6){
                User.errors.push({error : {message: "Password should contain at least 6 symbols"}})
            }
            else if (await User.isUserExists(email)){
                User.errors.push({error : {message: "Such user already exists! "}})
            }
           
            else if (User.errors.length === 0){
                res.status(200).json(await User.create(name, email, password));
            }
                            
            res.status(400).json(User.errors.shift())


        } catch (e){
            res.status(500).json({message: "Something went wrong, try one more time"})
        }

        
    }
    
    async loginUser(req, res){

    }
    
    async getUsers(req, res){
        res.send( await User.getAll());
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







