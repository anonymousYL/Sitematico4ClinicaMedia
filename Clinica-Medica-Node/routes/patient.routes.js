const Router = require("express");
const router = Router();
const { body } = require('express-validator')
var patientCtrl = require("../controllers/patient.controller");

router.get("/", patientCtrl.getPatients);

router.post(
  "/",
  [
    body('nom_pasiente', 'Ingrese un nombre valido')
      .exists()
      .isLength({ min: 5 }),
    body('ape_pasiente', 'Ingrese un apellido valido')
      .exists()
      .isLength({ min: 5 }),
    body('tel_pasiente', 'Ingrese un telefono valido')
      .exists()
      .isNumeric()
      .isLength({ min: 8, max: 8 }),
    body('sex_pasiente', 'La longitud minima del campo sexo es de 5')
      .exists()
      .isLength({ min: 5 }),
  ],
  patientCtrl.createPatient
);

module.exports = router;
