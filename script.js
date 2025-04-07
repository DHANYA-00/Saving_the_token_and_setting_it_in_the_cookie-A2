const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '2h' }); // Token valid for 2 hour
  return token;
};

module.exports = encrypt;

// test.js

const payload = { username: 'Shank' };
const secret = 'shank456';

const token = encrypt(payload, secret);
console.log('Generated JWT:', token);

try {
  const decoded = jwt.verify(token, secret);
  console.log('Valid token:', decoded);
} catch (err) {
  if (err.name === 'TokenExpiredError') {
    console.error('Token has expired.');
  } else {
    console.error('Invalid token:', err.message);
  }
}
