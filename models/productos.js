const {Schema,model} = require('mongoose')

const producto = new Schema({
    nombre:{
        type: String,
        require: [true,'El campo nombre es requerido'],
    },
    description:{
        type: String,
        require:[false,'El campo descripcion no es requerido']
    },
    quantity:{
        type: Number,
        require: [true,'El campo cantidad es requerido'],
    },
    fechaIngreso:{
        type: Date,
        require: [true,'El campo fecha es requerido'],
    }, SKU:{
        type: Number,
        require: [true,'El campo sku es requerido'],
    },

})
module.exports = model("Producto",producto)