const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  //Query params
  const params = req.query;
  const { nombre, apikey } = params;

  res.json({ msg: "get API - Controller", nombre, apikey });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({ msg: "put API - Controller", id });
};

const usersPost = (req, res = response) => {
  const body = req.body;
  const { nombre, edad } = body; //Se puede desestructurar para omitir campos que no nos sirven

  res.json({ msg: "post API - Controller", nombre, edad });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "delete API - Controller" });
};

module.exports = { usersGet, usersPut, usersPost, usersDelete };
