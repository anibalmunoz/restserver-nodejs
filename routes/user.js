const { Router } = require("express");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controllers/user");

const router = Router();

router.get("/", usersGet);

//http://localhost:8081/api/users/10
router.put("/:id", usersPut);

router.post("/", usersPost);

router.delete("/", usersDelete);

module.exports = router;
