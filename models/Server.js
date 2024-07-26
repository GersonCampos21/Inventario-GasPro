const express =require('express')
require("dotenv").config();
const connectMongo = require("../database/mongo");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/";
    //invocamos nuestros metodos
    this.middleWares();
    this.routes();
    this.mongoDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriendo en el puerto ${this.port}`);
    });
  }

  routes() {
    this.app.get('/',(req,res)=>{ res.redirect('/login')})
    this.app.use(this.usersPath, require("../routes/usuarios"));
    this.app.use(this.usersPath, require("../routes/productos"));
  }

  middleWares() {
    //Recibir datos de entrada con JSON
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    //Style
    this.app.use("/assets", express.static("assets"));
    //Layouts
    const expressLayouts = require("express-ejs-layouts");
    this.app.use(expressLayouts);
    //EJS
    this.app.set("view engine", "ejs");
    this.app.set("views", "./views/pages");
  }

  mongoDB() {
    connectMongo()
  }
}

module.exports = Server;