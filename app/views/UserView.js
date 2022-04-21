const UserService = require('../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){return {error:"El payload no existe"}}
    }
}

module.exports = UserView