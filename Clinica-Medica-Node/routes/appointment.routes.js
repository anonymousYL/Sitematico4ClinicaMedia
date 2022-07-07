const Router = require("express");
const router = Router();
const { body} = require('express-validator')
var appointmentCtrl = require("../controllers/appointment.controller");

router.get("/", appointmentCtrl.getAppointment);

router.post(
  "/",
  [
    body('nom_paciente', 'Ingrese un nombre valido')
      .exists()
      .isLength({ min: 5 }),
    body('ape_paciente', 'Ingrese un apellido valido')
      .exists()
      .isLength({ min: 5 }),
    body('tel_paciente', 'Ingrese un telefono valido')
      .exists()
      .isNumeric()
      .isLength({ min: 8, max: 8 }),
    body('nom_doctor', 'Ingrese un nombre de doctor valido')
      .exists()
      .isLength({ min: 5 }),
    body('f_cita', 'Ingrese una fecha valida')
      .exists()
      .isLength({ min: 10}),
  ],
  appointmentCtrl.createAppointment
);

module.exports = router;
