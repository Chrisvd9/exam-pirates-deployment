const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minLength: [4, 'El nombre necesita tener al menos 4 caracteres'],
    },
    image: {
        type: String,
        required: [true, 'Debes agregar una imagen vía url'],
    },
    position: {
        type: String,
        required: [true, 'Debe tener una posición'],
    },
    treasures: {
        type: Number,
        required: [true, 'Debe tener al menos 1 Tesoro'],
    },
    phrase: {
        type: String,
        required: [true, 'La frase es obligatoria'],
    },
    skill1: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"]
    },
    skill2: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"]
    },
    skill3: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"]
    }
}, { timestamps: true })

// PirateSchema.plugin(uniqueValidator,{message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"});

// PirateSchema.pre('findOneAndUpdate', function(next) {
//     this.options.runValidators = true;
//     next();
// });

const Pirate = mongoose.model('Pirate', PirateSchema)

module.exports = {PirateSchema, Pirate }