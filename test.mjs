import supertest from 'supertest';
import { expect } from 'chai';
import app from '../tugaspekanan-3-api-automation/app.js';

const request = supertest(app);

describe('First Test', () => {
  it('should return "Hello, World!"', async () => {
    const response = await request.get('/hello');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Hello, World!');
  });
});
