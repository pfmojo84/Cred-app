const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;
const expiration = '1h';

// creates a token and passes usertype into it so that the usertype can be used to show user specific content
module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    }),
    signToken: function ({ email, username, _id}, userType) {
      const payload = { email, username, _id, userType };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };
