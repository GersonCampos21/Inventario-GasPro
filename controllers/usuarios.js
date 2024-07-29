const { request, response } = require("express");
const userModel = require("../models/usuarios");



const loginSystem = async (req = request, res = response) => {
   try {
    res.render('login',{titulo:"Login",layout:"../layouts/layoutLogin"})
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const loginPOST = async (req = request, res = response) => {
  console.log("POST")
  const usuario = {
    user: req.body.txtUser,
    password: req.body.txtPassword
  }
  try {
   const user = await userModel.findOne({usuario: usuario.user });
   const pass = await userModel.findOne({password: usuario.password });
    if(user && pass){
      res.redirect('/api/productos')
    }else{
      res.redirect("/login?succes=" + encodeURIComponent("error"));
    }
 } catch (err) {
   console.log(err);
   throw new Error("Error en el metodo GET");
 }
};

const usersGET = async (req = request, res = response) => {
  try {
   //Obtener de la base de datos el select * from
   const user = await userModel.find()
   res.render('usuarios',{titulo:"Control Tecnicos",data:user,layout:"../layouts/layoutHome"})
 } catch (err) {
   console.log(err);
   throw new Error("Error en el metodo GET");
 }
};

const usersPOST = async (req = request, res = response) => {
  try {
    const { nombre, email, user, password, rol } = req.body;
    const usuario = new userModel({ nombre, email,user, password, rol });
    usuario.save();
    res.redirect("/api/tecnicos?success=" + encodeURIComponent("add"))
  } catch (err) {
    res.redirect("/api/tecnicos?success=" + encodeURIComponent("error-add"))
  }
};

const usersPUT = async (req = request, res = response) => {
  try {
    const {id} = req.body;  
    const {...resto} =req.body
    console.log(resto)
    const usuario = await userModel.findByIdAndUpdate(id,resto)
    res.redirect("/api/tecnicos/?success=" + encodeURIComponent("update"));
  } catch (err) { 
    res.redirect("/api/tecnicos/?success=" + encodeURIComponent("error-update"));
    console.log(err);
    throw new Error("Error en el metodo PUT");
  }
};

const usersDELETE = async (req = request, res = response) => {
  try {
    const id = req.params.id
    if(await userModel.findByIdAndDelete(id)){
      res.redirect("/api/tecnicos/?success=" + encodeURIComponent("delete"));
    }else{
      res.redirect("/api/tecnicos/?success=" + encodeURIComponent("error-delete"));
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo DELETE");
  }
};

module.exports = {
  loginSystem,
  loginPOST,
  usersPOST,
  usersDELETE,
  usersPUT,
  usersGET
};