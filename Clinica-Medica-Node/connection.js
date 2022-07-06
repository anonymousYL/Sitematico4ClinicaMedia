const mongoose = require('mongoose');

const mongoURI="mongodb://localhost/sistematicoClinicaDB"

mongoose.connect(mongoURI);

mongoose.connection.on('open',function callback(){
    console.log('Conexión a la base de datos establecido');
})
