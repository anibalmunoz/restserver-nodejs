const { response, request } = require("express");
const Usuario = require("../models/usuario");

const usersGet = (req = request, res = response) => {
  //Query params
  const params = req.query;
  const { nombre, apikey } = params;

  res.json({ msg: "get API - usersGet", nombre, apikey });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({ msg: "put API - usersPut", id });
};

const usersPost = (req, res = response) => {
  const body = req.body;
  const { nombre, edad } = body; //Se puede desestructurar para omitir campos que no nos sirven

  const usuario = new Usuario(body);

  res.json({ msg: "post API - usersPost", usuario });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "delete API - usersDelete" });
};

module.exports = { usersGet, usersPut, usersPost, usersDelete };
