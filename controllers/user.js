const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
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

//Guardado de un nuevo usuario
const usersPost = async (req, res = response) => {
  const body = req.body;
  const { nombre, correo, password, rol } = body; //Se puede desestructurar para omitir campos que no nos sirven
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en base de datos
  await usuario.save();
  //Respuesta del servicio
  res.json({ usuario });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "delete API - usersDelete" });
};

module.exports = { usersGet, usersPut, usersPost, usersDelete };
