const mongoose = require('mongoose')

const {isDate} = require('validator')

const tareaSchema = new mongoose.Schema({
    id: {
        type:String,
        require:[true,'Por favor ingrese un id'],
        unique:[true,'Ese id ya se encuentra registrado'],
        minlength:[1,'El id debe poseer mas de 6 caracteres'],
        lowecase:true
    },
    nombre: {
        type:String,
        require:[true, 'Por favor ingrese un nombre'],
        minlength:[6,'El nombre debe poseer mas de 6 caracteres']
    },
    descripcion: {
        type:String,
        require:[true, 'Por favor ingrese una descripcion'],
        minlength:[6,'La descripcion debe poseer mas de 10 caracteres']
    },
    fechaCreacion: {
        type:Date,
        require:[true, 'Por favor ingrese la fecha de creacion']
    },
    completada: {
        type:Boolean,
        require:false
    },
})

tareaSchema.statics.getAllTasks = async function() {
    return await this.find()
}


const Tarea = mongoose.model('tarea',tareaSchema)

module.exports=Tarea