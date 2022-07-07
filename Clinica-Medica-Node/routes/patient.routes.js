const Router = require("express");
const router = Router();

var patientCtrl = require("../controllers/patient.controller");

router.get("/", patientCtrl.getPatients);

router.post(
  "/",
  patientCtrl.createPatient
);

module.exports = router;
