const User = require('../../app/models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }
}

module.exports = UserService