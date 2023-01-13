const express = require('express');
const request = require('supertest');
const tree = require('../../../components/tree');

const app = express();
app.use('/tree', tree);

describe('Tree Handler', function() {
  test('provides a 200 response to /tree', async () => {
    const res = await request(app).get('/tree');
    expect(res.statusCode).toBe(200);
  });

  test('response is returned as a JSON object', async () => {
    const res = await request(app).get('/tree');
    expect(res.header['content-type']).toMatch(/application\/json/);
  });

  test('returns "Weeping Willow" as the favourite tree', async () => {
    const res = await request(app).get('/tree');
    const favouriteTree = {
      "myFavouriteTree": "Weeping Willow"
    };
    
    expect(res.text).toEqual(JSON.stringify(favouriteTree));
  });
});
