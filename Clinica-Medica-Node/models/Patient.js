const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const patientSchema = new Schema(
  {
    ID_PASIENTE: { type: String, default: uuidv4 },
    NOM_PASIENTE: { type: String, required: [true, "can't be blank"] },
    APE_PASIENTE: { type: String, required: [true, "can't be blank"] },
    TEL_PASIENTE: String,
    SEX_PASIENTE: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Patient", patientSchema);


