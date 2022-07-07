const Router = require("express");
const router = Router();
const { body } = require('express-validator')

var usersCtrl = require("../controllers/user.controller");

router.get("/", usersCtrl.getUsers);

router.post(
  "/",
  [
    body('username', 'Ingrese un nombre de usuario valido')
      .exists()
      .isLength({ min: 5 }),
    body('password', 'Ingrese un usuario valido')
      .exists()
      .isLength({ min: 5 }),
    body('nom_usuario', 'Ingrese un nombre valido')
      .exists()
      .isLength({ min: 5 }),
    body('ape_usuario', 'Ingrese un apellido valido')
      .exists()
      .isLength({ min: 5 }),
    body('email', 'Ingrese un email valido')
      .exists()
      .isEmail(),
    body('tel_contacto', 'Ingrese un telefono valido')
      .exists()
      .isNumeric()
      .isLength({ min: 8, max: 8 }),
    body('sex_usuario', 'La longitud minima del campo sexo es de 5')
      .exists()
      .isLength({ min: 5 }),
  ],
  usersCtrl.createUser
);

module.exports = router;
