const mongoose = require("mongoose"); 
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const config = require("config");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        unique: false,
        minlength: 6,
        maxlength: 255
    },
    wallet: {
        type: Number,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});

// custom method to generate authToken
userSchema.methods.generateAuthToken = () => {
    // get the private key from the config file ---------------------->
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('myprivatekey'));
    return token;
}

// create User mongoose model
const User = mongoose.model('User', userSchema);

// function validateUserLogin(user) {
    
//     return joi.object({
//         email: joi.string().min(5).max(50).email().required(),
//         password: joi.string().min(6).max(255).required()
//     }).validate(user);
// }

// function validateUserRegistration(user) {

//     return joi.object({
//         email: joi.string().min(5).max(50).email().required(),
//         password: joi.string().min(6).max(255).required(),
//         repeatPassword: joi.string().min(6).max(255),
//         wallet: joi.number().required()
//     }).validate(user);
// }

module.exports = User;

exports.validateUserLogin = (user) => {
    return joi.object({
        email: joi.string().min(5).max(50).email().required(),
        password: joi.string().min(6).max(255).required()
    }).validate(user);
};

exports.validateUserRegistration = (user) => {
    return joi.object({
        email: joi.string().min(5).max(50).email().required(),
        password: joi.string().min(6).max(255).required(),
        repeatPassword: joi.string().min(6).max(255),
        wallet: joi.number().required()
    }).validate(user);
};