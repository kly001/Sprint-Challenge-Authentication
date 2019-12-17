const server = require('./server.js');

const db = require('../database/dbConfig.js');

const request = require('supertest');


describe('the server', () => {

    beforeEach(async() => {
        await db('users').truncate();
    })

    describe('GET /', () => {

        it('should return status 200', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        });


        it('should be json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })
        

        it('should return the correct object', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toBe('application/json')
                expect(res.body).toEqual({ api: "Up and running" })
            })
        })
    })
  
})