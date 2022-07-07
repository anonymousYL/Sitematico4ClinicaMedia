const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const appointmenttSchema = new Schema(
  {
    ID_CITA: { type: String, default: uuidv4 },
    NOM_PACIENTE: { type: String, required: [true, "can't be blank"] },
    APE_PACIENTE: { type: String, required: [true, "can't be blank"] },
    TEL_PACIENTE: { type: String, required: [true, "can't be blank"] },
    NOM_DOCTOR: { type: String, required: [true, "can't be blank"] },
    F_CITA: { type: String, required: [true, "can't be blank"] },
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Appointmentt", appointmenttSchema);


