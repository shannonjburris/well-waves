const jwt = require('jsonwebtoken');

const secret = 'gitgalsROCK';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
