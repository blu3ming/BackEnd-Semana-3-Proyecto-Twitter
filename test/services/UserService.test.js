const UserService = require('../../app/services/UserService')

describe("Test for UserService", () =>{
    test('1) Create new user with UserService', () => {
        const user = UserService.create(1,'blu3ming','Josue Cruz');
        expect(user.id).toBe(1);
        expect(user.username).toBe('blu3ming');
        expect(user.name).toBe('Josue Cruz');
        expect(user.bio).not.toBeUndefined();
    });
});