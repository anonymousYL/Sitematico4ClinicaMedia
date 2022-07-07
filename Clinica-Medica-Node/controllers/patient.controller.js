var Patient = require("../models/Patient");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');


const createPatient = async (req, res) => {
  try {
    patientB = req.body;
    // creating a new patient
    const patient = new Patient({
      ID_PASIENTE:  uuidv4(),
      NOM_PASIENTE: patientB.nom_pasiente,
      APE_PASIENTE: patientB.ape_pasiente,
      TEL_PASIENTE: patientB.tel_pasiente,
      SEX_PASIENTE: patientB.sex_pasiente,
      F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    // saving the new user
    const savedPatient = await patient.save();

    return res.status(200).json({
      ID: savedPatient.ID_USUARIO,
      NOM_PASIENTE: savedPatient.NOM_PASIENTE,
      APE_PASIENTE: savedPatient.APE_PASIENTE,
      F_CREACION: savedPatient.F_CREACION
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);

  }
};

const getPatients = async (req, res) => {
  const patient = await Patient.find();
  return res.json(patient);
};

module.exports = { getPatients, createPatient };



