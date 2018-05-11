const request = require('supertest');
const mongoose = require('mongoose');
const server = require('./start');
const { expect } = require('chai');

describe('用户接口测试', () => {
    after(() => {
        server.close();
        mongoose.disconnect();
    });

    it('/users 结果为数组', (done) => {
        request(server).get('/users')
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                const result = res.body;
                expect(result).to.be.an('array');
                done();
            });
    });

    // it('/user/')
});
