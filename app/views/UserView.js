const UserService = require('../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){return {error:"El payload no existe"}}
        else if(typeof payload.username != "string" && typeof payload.name != "string" && typeof payload.id != "number"){
            return {error: "Los valores del payload necesitan tener un valor válido"}
        } else if(payload.username === undefined || payload.name === undefined || payload.id === undefined){
            return {error: "Los valores del payload necesitan tener un valor válido2"}
        } else{
            const user = UserService.create(payload.id, payload.username, payload.name)
            return user
        }
    }
}

module.exports = UserView