import supertest from 'supertest';
import { expect } from 'chai';
import fs from 'fs';

const apiURL = 'https://kasir-api.belajarqa.com';
const request = supertest(apiURL);
const loginData = JSON.parse(fs.readFileSync('../tugaspekanan-3-api-automation/Environment/akunadmin.json', 'utf-8'))
const loginCredentials = {
    email: loginData.email,
    password: loginData.password
  };
const response = await request.post('/authentications')
                              .send(loginCredentials);
                              
describe('API Login Tests', () => {
  it('TC-004_harus berhasil login dan mengembalikan respon kode 201', async () => {
    expect(response.status).to.equal(201);
    fs.writeFileSync('../tugaspekanan-3-api-automation/Environment/responselogin.json', JSON.stringify(response.body));
  }).timeout(2000);

  it('TC-005_harus ada redaksi "Authentication berhasil ditambahkan" pada text response', async () => {
    expect(response.text).to.include('Authentication berhasil ditambahkan');
  }).timeout(2000);
});

