import supertest from 'supertest';
import { expect } from 'chai';
import fs from 'fs';

const apiURL = 'https://kasir-api.belajarqa.com';
const request = supertest(apiURL);
const loginResponse = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/responselogin.json', 'utf-8'));
const accessToken = loginResponse.data.accessToken;
const response = await request.get('/users')
                              .set('Authorization', `Bearer ${accessToken}`);

describe('API Get User Tests', () => {
  it('TC-004_harus berhasil mendapatkan list user dan mendapat response 200', async () => {
    expect(response.status).to.equal(200);
  }).timeout(2000);

  it('TC-005_harus berhasil mendapatkan response "success"', async () => {
  expect(response.text).to.include('success');
  }).timeout(2000);
});