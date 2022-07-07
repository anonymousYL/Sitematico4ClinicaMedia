var Patient = require("../models/Patient");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator')

const createPatient = async (req, res) => {

  //Validación de la documentación oficial
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ status: 400, message: errors.array() })
  }
  //validación propia    
  /*   const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('index', {validaciones:validaciones, valores: valores}) */
  else {
    try {
      patientB = req.body;
      // creating a new patient
      const patient = new Patient({
        ID_PASIENTE: uuidv4(),
        NOM_PASIENTE: patientB.nom_pasiente,
        APE_PASIENTE: patientB.ape_pasiente,
        TEL_PASIENTE: patientB.tel_pasiente,
        SEX_PASIENTE: patientB.sex_pasiente,
        F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
      });

      // saving the new user
      const savedPatient = await patient.save();

      return res.status(200).json({
        status: 200, message: {
          ID: savedPatient.ID_USUARIO,
          NOM_PASIENTE: savedPatient.NOM_PASIENTE,
          APE_PASIENTE: savedPatient.APE_PASIENTE,
          F_CREACION: moment(savedPatient.F_CREACION).format("YYYY-MM-DD")
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ status: 400, message: error });
    }
  }
};

const getPatients = async (req, res) => {
  const patient = await Patient.find();
  return res.json(patient);
};

module.exports = { getPatients, createPatient };



