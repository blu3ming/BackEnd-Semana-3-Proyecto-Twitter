const User = require('../../app/models/User')

describe('Unit test for User class',()=>{
    test('Create an User object', () => {
        const user = new User(1,'blu3ming','Josue Cruz','Computer Engineer. Developer.',0,0);
        expect(user.id).toBe(1);
        expect(user.username).toBe('blu3ming');
        expect(user.name).toBe('Josue Cruz');
        expect(user.bio).toBe('');
        expect(user.dateCreated).toBe(0);
        expect(user.lastUpdated).toBe(0);
    });
});