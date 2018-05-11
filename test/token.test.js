const { generateToken, verifyToken } = require('../common/identity');
const { expect, assert } = require('chai');

describe('token测试', () => {
    const info = {};
    const user = { username: 'katte' };
    it('token生成', () => {
        const token = generateToken(user);
        expect(token).to.be.a('string');
        expect(token.split('.')).to.have.lengthOf(3);
    });
    it('token验证', () => {
        const token = generateToken(user);
        const identity = verifyToken(token);
        expect(identity).to.be.deep.equal(user);
    });
    describe('token超时测试 3s时限', () => {
        const token = generateToken(user, '3s');
        it('3s内验证', (done) => {
            setTimeout(() => {
                const identity = verifyToken(token);
                expect(identity).to.be.deep.equal(user);
                done();
            }, 50);
        });
        it('超过3s验证', (done) => {
            setTimeout(() => {
                try {
                    const identity = verifyToken(token);
                } catch (error) {
                    expect(error.name).to.be.equal('TokenExpiredError');
                    done();
                }
            }, 3001);
        });
    });
});
