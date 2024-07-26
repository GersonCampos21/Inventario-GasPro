const { default: mongoose } = require("mongoose");

const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MongoDB);
    console.log("Conexion Exitosa");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la conexion de datos");
  }
};
module.exports = connectMongo;