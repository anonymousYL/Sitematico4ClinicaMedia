const Router = require("express");
const router = Router();

var usersCtrl = require("../controllers/user.controller");

router.get("/", usersCtrl.getUsers);

router.post(
  usersCtrl.createUser
);

module.exports = router;
