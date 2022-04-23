const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    lastName: {
        type: String,
        required: [true, "El apellido es requerido"],
    },
    email: {
        type: String,
        required: [true, "El Email es obligatorio"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Porfavor introduce un email válido",
        },
        unique:true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
        minlength: [9, "La contraseña debe contener al menos 9 caracteres"],
    }
},{ timestamps: true });

UserSchema.plugin(uniqueValidator,{ message: 'Error, {PATH} ya existe' });

//Establecemos el get y el set de la variable confirmPassword, que llega como campo en el body, pero no es almacenada en el UserSchema.
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

//Validamos que la password y la confirmPassword sean iguales.
//Validación se hará sólo si el usuario es nuevo this.isNew
UserSchema.pre("validate", function (next) {
    if (this.isNew && this.password !== this["confirmPassword"]) {
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
});

//Encriptamos la contraseña
//Operación se hará sólo si el usuario es nuevo this.isNew
UserSchema.pre("save", function (next) {
    if (this.isNew)
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
    else next();
});



const User = mongoose.model('User', UserSchema);

module.exports = { UserSchema, User };
