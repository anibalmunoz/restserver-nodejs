const { Router } = require("express");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controllers/user");
//Colección de middlewares de express-validator
const { check } = require("express-validator");

const router = Router();

router.get("/", usersGet);

//http://localhost:8081/api/users/10
router.put("/:id", usersPut);

router.post(
  "/",
  [check("correo", "El correo no es válido").isEmail()],
  usersPost
);

router.delete("/", usersDelete);

module.exports = router;
