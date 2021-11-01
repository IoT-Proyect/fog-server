require("dotenv").config();
const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(process.env.FOG_DATABASE, {
      useNewUrlParser: true,
    });

    console.log("Conectado a la base de datos");
  } catch (e) {
    console.log("Error al conectar a la base de datos");
    console.log(e);
  }
}

module.exports = dbConnect;
