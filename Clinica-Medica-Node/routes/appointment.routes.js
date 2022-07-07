const Router = require("express");
const router = Router();

var appointmentCtrl = require("../controllers/appointment.controller");

router.get("/", appointmentCtrl.getAppointment);

router.post(
  "/",
  appointmentCtrl.createAppointment
);

module.exports = router;
