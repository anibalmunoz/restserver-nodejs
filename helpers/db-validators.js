const Rol = require("../models/rol.js");
const Usuario = require("../models/usuario");

const esRolValido = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en al DB`);
  }
};

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo: correo });
  if (existeEmail) {
    throw new Error(`El correo ${correo} ya está registrado`);
  }
};

module.exports = { esRolValido, emailExiste };
