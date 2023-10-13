// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    it('gets musicians', async () => {
        const response  = await request(app).get('/musicians');
        const responseData = await JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(typeof responseData).toBe('object');
        expect(responseData[0].name).toBe('Mick Jagger')
    })    
})

describe('./bands endpoint', () => {
    it('gets bands', async () => {
        const response2 = await request(app).get('/bands');
        const responseData2 = await JSON.parse(response2.text);
        expect(response2.statusCode).toBe(200);
        expect(typeof responseData2).toBe('object');
        expect(responseData2[1].name).toBe('Black Pink');
    })
})