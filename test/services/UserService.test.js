const UserService = require('../../app/services/UserService')

describe("Test for UserService", () =>{
    test('1) Create new user with UserService', () => {
        const user = UserService.create(1,'blu3ming','Josue Cruz');
        expect(user.id).toBe(1);
        expect(user.username).toBe('blu3ming');
        expect(user.name).toBe('Josue Cruz');
        expect(user.bio).not.toBeUndefined();
    });

    test('2) Get info from an User', () => {
        const user = UserService.create(1,'blu3ming','Josue Cruz');
        const UserInfoInList = UserService.getInfo(user)

        expect(UserInfoInList[0]).toBe(1);
        expect(UserInfoInList[1]).toBe('blu3ming');
        expect(UserInfoInList[2]).toBe('Josue Cruz');
        expect(UserInfoInList[3]).toBe("Sin bio");
    });

    test('3) Update Username', () => {
        const user = UserService.create(1,'blu3ming','Josue Cruz');
        UserService.updateUserUsername(user, 's4vitar')
        expect(user.username).toBe('s4vitar');
    });

    test('4) Retrieve a list of usernames given a list of users', () => {
        const user1 = UserService.create(1,'blu3ming1','Josue Cruz');
        const user2 = UserService.create(1,'blu3ming2','Josue Cruz');
        const user3 = UserService.create(1,'blu3ming3','Josue Cruz');
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain('blu3ming1');
        expect(usernames).toContain('blu3ming2');
        expect(usernames).toContain('blu3ming3');
    });
});