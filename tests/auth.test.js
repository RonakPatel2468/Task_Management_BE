const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Auth API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
    });
    
    afterAll(async () => {
        await mongoose.disconnect();
    });
    
    it('should register a new user', async () => {
        const res = await request(app).post('/api/auth/register').send({
            email: 'test@test.com',
            password: 'password123',
            role: 'User'
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });
});
