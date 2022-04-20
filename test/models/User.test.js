const User = require('../../app/models/User')

describe('Unit test for User class',()=>{
    test('Create an User object', () => {
        const user = new User(1,'blu3ming','Josue Cruz','Computer Engineer. Developer.');
        expect(user.id).toBe(1);
        expect(user.username).toBe('blu3ming');
        expect(user.name).toBe('Josue Cruz');
        expect(user.bio).toBe('Computer Engineer. Developer.');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
});