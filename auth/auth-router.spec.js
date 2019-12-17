const Users = require('../users/users-model.js');

const db = require('../database/dbConfig.js');



describe('users-model', () => {
    describe('add function', () => {
        it('should add the user into the db', async () => {
            await Users.add({ username: 'new user', password: 'password' });        
            const users = await db('users');
            expect(users).toHaveLength(1);
        });
    

        it('should return the user added into the db', async () => {
            let user = await Users.add({ username: 'new user', password:'password' });
            expect(user.username).toBe('new user');
            expect(user.password).toBe('password')
        });


        beforeEach(async () => {
            await db('Users').truncate();
        })
    });
});


