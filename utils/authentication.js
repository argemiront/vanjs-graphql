const { AuthenticationError } = require('apollo-server');

module.exports = ({ req }, db) => {

  const token = req.get('authentication') || req.query.token;

  if (!token) {

    throw new AuthenticationError('Authentication failed! Missing token.');

  }

  const user = db.getUser(token);

  if (!user) {

    throw new AuthenticationError('Authentication failed! Invalid token. You shall not pass.');

  }

  return { user };
};