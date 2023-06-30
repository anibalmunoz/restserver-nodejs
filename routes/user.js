const { Router } = require("express");
const { validarCampos } = require("../middlewares/validar-campos.js");

const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controllers/user");
//Colección de middlewares de express-validator
const { check } = require("express-validator");
const {
  esRolValido,
  emailExiste,
  existeUsuarioxID,
} = require("../helpers/db-validators.js");

const router = Router();

router.get("/", usersGet);

//http://localhost:8081/api/usuarios/10
router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioxID),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usersPut
);

router.post(
  "/",
  [
    check("correo", "El correo no es válido").isEmail(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña es obligatoria y debe tener más de 6 caracteres"
    ).isLength({ min: 6 }),
    // check("rol", "No es un rol válido").isIn(["ADMIN_ROL", "USER_ROL"]),
    check("rol").custom(esRolValido),
    check("correo").custom(emailExiste),
    validarCampos,
  ],
  usersPost
);

router.delete("/", usersDelete);

module.exports = router;
