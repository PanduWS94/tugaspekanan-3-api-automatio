import supertest from 'supertest';
import { expect } from 'chai';
import fs from 'fs';

const apiURL = 'https://kasir-api.belajarqa.com';
const request = supertest(apiURL);
const loginResponse = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/responselogin.json', 'utf-8'));
const accessToken = loginResponse.data.accessToken;

describe('API Create User Tests', () => {
  it('TC-003_harus berhasil create user baru, mengembalikan respon kode 201 dan mendapat pesan "User berhasil ditambahkan" ', async () => {
    const newUser = {
      "name": "Pandu",
      "email": "panduws345@gmail.com",
      "password": "123321saja"
    };
    const response = await request.post('/users')
                                  .set('Authorization', `Bearer ${accessToken}`)
                                  .send(newUser);

    expect(response.status).to.equal(201);
    expect(response.text).to.include('User berhasil ditambahkan');
    fs.writeFileSync('../tugaspekanan-3-api-automation/Environment/userid.json', JSON.stringify(response.body));
  }).timeout(2000);
});