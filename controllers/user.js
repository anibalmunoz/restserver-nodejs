const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const usersGet = async (req = request, res = response) => {
  //Query params
  const params = req.query;
  const { limite = 5, desde = 0 } = params;

  const usuarios = await Usuario.find().skip(desde).limit(Number(limite));

  res.json({ usuarios });
};

const usersPut = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, google, correo, ...resto } = req.body;

  //TODO: validar contra base de datos
  if (password) {
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
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
