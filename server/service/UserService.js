const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const config = require('../config.json');
const db = require('../helper/db');

async function create(userDetails) {
  if (await User.findOne({ email: userDetails.email })) {
    throw 'EmailID "' + userDetails.email + '" is already taken';
  }

  const user = new User(userDetails);

  if (userDetails.password) {
    user.hash = bcrypt.hashSync(userDetails.password, 10);
  }

  await user.save();
}

async function authenticate(userDetails) {
  const { email, password } = userDetails;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, {
      expiresIn: '7d',
    });
    return {
      ...user.toJSON(),
      token,
    };
  }
}

module.exports = {
  create,
  authenticate,
};
