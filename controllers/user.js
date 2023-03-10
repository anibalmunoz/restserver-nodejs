const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({ msg: "get API - Controller" });
};

const usersPut = (req, res = response) => {
  res.json({ msg: "put API - Controller" });
};

const usersPost = (req, res = response) => {
  res.json({ msg: "post API - Controller" });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "delete API - Controller" });
};

module.exports = { usersGet, usersPut, usersPost, usersDelete };
