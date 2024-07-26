const { request, response } = require("express");
const productoCon = require("../models/productos");


const productsGET = async (req = request, res = response) => {
   try {
    //Obtener de la base de datos el select * from
    const user = await productoCon.find()
    console.log()
    res.render('index',{titulo:"Control Inventario",data:user,layout:"../layouts/layoutHome"})
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const productsPOST = async (req = request, res = response) => {
  try {
    const SKU = Math.random().toString().substring(2, 8); // Genera un número aleatorio y toma los primeros 8 dígitos como ID
    const { nombre, quantity, description,fechaIngreso  } = req.body;
    const product = new productoCon({ nombre, quantity, description, SKU,fechaIngreso });
    product.save();
    res.redirect("/api/productos?success=" + encodeURIComponent("add"))
  } catch (err) {
    res.redirect("/api/productos?success=" + encodeURIComponent("error-add"))
  }
};

const productsPUT = async (req = request, res = response) => {
  try {
    const {id} = req.body;  
    const {precio, nombre,SKU,...resto} =req.body
    const update = await productoCon.findByIdAndUpdate(id,resto)
    res.redirect("/api/productos/?success=" + encodeURIComponent("update"));
  } catch (err) { 
    res.redirect("/api/productos/?success=" + encodeURIComponent("error-update"));
    console.log(err);
    throw new Error("Error en el metodo PUT");
  }
};

const productsDELETE = async (req = request, res = response) => {
  try {
    const id = req.params.id
    if(await productoCon.findByIdAndDelete(id)){
      res.redirect("/api/productos/?success=" + encodeURIComponent("delete"));
    }else{
      res.redirect("/api/productos/?success=" + encodeURIComponent("error-delete"));
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo DELETE");
  }
};

module.exports = {
  productsDELETE,
  productsGET,
  productsPOST,
  productsPUT
};
