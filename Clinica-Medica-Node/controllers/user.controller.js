var User = require("../models/Users");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");


const createUser = async (req, res) => {
  try {
    userB = req.body;

    //const rolesFound = await Role.find({ name: { $in: roles } });
    // creating a new User
    const user = new User({
      ID_USUARIO: uuidv4(),
      USERNAME: userB.username,
      PASSWORD: await encryptPassword(userB.password),// encryptPassword(userB.password),
      NOM_USUARIO: userB.nom_usuario,
      APE_USUARIO: userB.ape_usuario,
      EMAIL: userB.email,
      TEL_CONTACTO: userB.tel_contacto,
      SEX_USUARIO: userB.sex_usuario,
      ES_USUARIO: "ACTIV",
      F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

   console.log(user)

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      ID_USUARIO: savedUser.ID_USUARIO,
      USERNAME: savedUser.USERNAME,
      NOM_USUARIO: savedUser.NOM_USUARIO,
      ES_USUARIO: savedUser.ES_USUARIO,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

module.exports = { getUsers, createUser, encryptPassword ,comparePassword};
