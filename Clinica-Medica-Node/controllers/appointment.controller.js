var Appointment = require("../models/Appointment");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');


const createAppointment = async (req, res) => {
  try {
    appointmentB = req.body;
    // creating a new Appointment
    const appointment = new Appointment({
      ID_CITA: uuidv4(),
      NOM_PACIENTE: appointmentB.nom_paciente,
      APE_PACIENTE: appointmentB.ape_paciente,
      TEL_PACIENTE: appointmentB.tel_paciente,
      NOM_DOCTOR: appointmentB.nom_doctor,
      F_CITA: appointmentB.f_cita,
      F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    // saving the new appointment
    const savedAppointment = await appointment.save();
    return res.status(200).json({
      ID: savedAppointment.ID_CITA,
      NOM_PASIENTE: savedAppointment.NOM_PACIENTE,
      APE_PASIENTE: savedAppointment.APE_PACIENTE,
      F_CITA: savedAppointment.F_CITA,
      F_CREACION: savedAppointment.F_CREACION
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);

  }
};

const getAppointment = async (req, res) => {
  const appointment = await Appointment.find();
  return res.json(appointment);
};

module.exports = { createAppointment, getAppointment };



