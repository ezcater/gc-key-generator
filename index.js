require('dotenv').config();
const crypto = require('crypto');
const API_SECRET = process.env.GC_API_SECRET;

module.exports = function() {
  const requestTime = Math.floor(Date.now() / (60000));
  const shasum = crypto.createHash('sha1');
  const currentHashedToken = shasum.update(`${API_SECRET}${requestTime}`);

  return currentHashedToken.digest('hex');
};
