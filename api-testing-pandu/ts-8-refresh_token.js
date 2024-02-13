import supertest from 'supertest';
import { expect } from 'chai';
import fs from 'fs';

const apiURL = 'https://kasir-api.belajarqa.com';
const request = supertest(apiURL);
const loginResponse = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/responselogin.json', 'utf-8'));
const accessToken = loginResponse.data.accessToken;
const refreshToken = loginResponse.data.refreshToken;

describe('API Refresh Token Tests', () => {
  it('TC-012_harus berhasil refresh token dan mendapat response 200', async () => {
    const refreshData = {
        "refreshToken": refreshToken
     };
    const response = await request.put(`/authentications`)
                                  .set('Authorization', `Bearer ${accessToken}`)
                                  .send(refreshData);

    expect(response.status).to.equal(200);
    expect(response.text).to.include('success');
  }).timeout(2000);
});

