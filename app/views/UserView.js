const UserService = require('../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){return {error:"El payload no existe"}}
        else if(typeof payload.username != "string" && typeof payload.name != "string" && typeof payload.id != "number"){
            return {error: "Los valores del payload necesitan tener un valor válido"}
        } else if(isNaN(payload.username) || isNaN(payload.name) || isNaN(payload.id)){
            return {error: "Los valores del payload necesitan tener un valor válido"}
        }
    }
}

module.exports = UserView