const express = require('express');
const app = express();
//const  cors = require('cors');
//const  morgan = require('morgan');
const helmet = require('helmet');
const pkg = require('./package.json');
const usersRoutes = require("./routes/user.routes");
const patientRoutes = require("./routes/patient.routes");
const path = require('path');

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Middlewares
const corsOptions = {
  // origin: "http://localhost:3000",
};
//app.use(cors(corsOptions));
app.use(helmet());
//app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Welcome Routes
app.get("/", (req, res) => {
  res.json({ user: 'geek' });
});

// Routes
//app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/patient", patientRoutes);
//app.use("/api/auth", authRoutes);


module.exports = app;
