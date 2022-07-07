const { Schema, model } =require("mongoose");
const { v4: uuidv4 } = require('uuid');

const appointmenttSchema = new Schema(
  {
    ID_PASIENTE: { type: String, default: uuidv4 },
    NOM_PASIENTE: String,
    APE_PASIENTE: String,
    TEL_PASIENTE: String,
    SEX_PASIENTE: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports =model("Appointmentt", appointmenttSchema);


