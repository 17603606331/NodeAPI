const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

/**
 * 生成token
 */
const generateToken = (data, expiresIn = '2 days') => {
    const cert = fs.readFileSync(path.join(__dirname, 'private_key.pem'));
    const token = jwt.sign({
        data,
    }, cert, { algorithm: 'RS256', expiresIn });
    return token;
};

/**
 * 验证token
 */
const verifyToken = (token) => {
    const cert = fs.readFileSync(path.join(__dirname, 'public_key.pem'));
    let res;
    try {
        const result = jwt.verify(token, cert, { algorithm: 'RS256' }) || {};
        const { exp = 0 } = result;
        const current = Math.floor(Date.now() / 1000);
        // 过期检验
        if (current <= exp) {
            res = result.data || {};
        }
    } catch (error) { throw error; }
    return res;
};

module.exports = {
    generateToken,
    verifyToken,
};
