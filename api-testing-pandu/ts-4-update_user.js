import supertest from 'supertest';
import { expect } from 'chai';
import fs from 'fs';

const apiURL = 'https://kasir-api.belajarqa.com';
const request = supertest(apiURL);
const loginResponse = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/responselogin.json', 'utf-8'));
const accessToken = loginResponse.data.accessToken;
const user = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/userid.json', 'utf-8'));
const userId = user.data.userId;

describe('API Update User Tests', () => {
  it('TC-006_harus berhasil update user menjadi "Pandu-update" dan mendapat response 200', async () => {
    const updateUser = {
      "name": "Pandu-update",
      "email": "panduws345@gmail.com"
    };
    const response = await request.put(`/users/${userId}`)
                                  .set('Authorization', `Bearer ${accessToken}`)
                                  .send(updateUser);

    expect(response.status).to.equal(200);
    expect(response.text).to.include('Pandu-update');
  }).timeout(2000);
});