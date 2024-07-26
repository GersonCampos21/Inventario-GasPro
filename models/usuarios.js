const {Schema,model} = require('mongoose')

const users = new Schema({
    nombre:{
        type: String,
        require: [true,'El campo nombre es requerido'],
    },
    cedula:{
        type: Number,
        require: [true,'La cedula es requerido'],
    },
    email:{
        type: String,
        require: [true,'El correo es requerido'],
    },
    user:{
        type: String,
        require: [true,'El usuario es requerido'],
    }, 
    password:{
        type: String,
        require: [true,'La contraseña es requerida'],
    },

})
module.exports = model("users",users)