const UserView = require('../../app/views/UserView')

describe("Test for UserView", () =>{
    test('1) Return error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/);
    });

    test('2) Return error object when try to create a new user with a payload with invalid properties', () => {
        const payload = {username:null, name:12, id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test('3) Return error object when try to create a new user with a payload with missing properties', () => {
        const payload = {username:"username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test('4) Create user with a valid payload', () => {
        const payload = {username:"username", id:1, name:"name"}
        const result = UserView.createUser(payload)
        expect(result.id).toBe(1);
        expect(result.username).toBe("username");
        expect(result.name).toBe("name");
    });
});