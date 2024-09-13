
const request = require('supertest');

let server;

describe('GET /', ()=>{
  

    beforeEach(() => { 
        server =  require('../src/server');
    });
    afterEach(() => { 
        server.close(); 
    });

    it('should return Hello, World! :)', async()=>{
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World! :)');
    });

    
});

