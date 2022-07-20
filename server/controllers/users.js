const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const response = require('../lib/response_handler');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const getAllUsers = async (req, res) => {
  const users = await User.find().populate("likedRecipes");

  res.send({
    error: false,
    users: users,
  });
};

const byId = async (req, res) => {

  const users = await User.findById(req.params.id).populate('recipes');

  res.send({
    error: false,
    message: `User with id #${users._id}, has been fetched`,
    users: users
  });
};

const register = async (req, res) => {

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return response(res, 400, 'Bad request');
    }

    req.body.password = bcrypt.hashSync(req.body.password);

    user = await User.create(req.body);

    response(res, 201, 'New user has been created', { user });
  } catch (error) {
    return response(res, 500, error.msg)
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    let userId = user._id;

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // token = plain data (JSON payload) + secret key za potpisuvanje na token + config options
        const payload = {
          id: user._id,
          email: user.email,
          first_name: user.first_name
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: '9999y'
        });

        response(res, 200, 'You have logged in successfully', { token, userId })
      } else {
        response(res, 401, 'Invalid credentials');
      }
    } else {
      response(res, 401, 'Invalid credentials');
    }
  } catch (error) {
    response(res, 500, error.msg);
  }
}

const update = async (req, res) => {
  const user = await User.findById(req.params.id);

  if(req.file) {
    fs.unlink('public/' + user.image, (err) => {
      if (err) console.log(err);
    })
    req.body.image = `images/${req.file.filename}`;
  }
  else {
    req.body.image = user.image;
  }

  if (req.body.password !== "") {
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  else {
    req.body.password = user.password;
  }

  await User.findByIdAndUpdate(req.body.id, req.body);

  res.send({
    error: false,
    message: `User with id #${user._id} has been updated`,
    user: user
  });
};

module.exports = {
  byId,
  register,
  login,
  update,
  getAllUsers,
}