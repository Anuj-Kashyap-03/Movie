const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto=require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter name Email"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Plese provide the validate Email"]

    },
    password: {
        type: String,
        required: [true, "Please Enter the  password"],
        minLength: 8,
        select: false,
    },
    resetPasswordtoken: String,
    resetPasswordtokenExpiry: Date
})

// Checking that password is Modified or not and hashing that
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
});


// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


// Generating jwt Token 
userSchema.methods.getJWTtoken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRIT_KEY, {
        expiresIn: process.env.SECRIT_KEY_EXPIRY*24*60*60*1000,
    });
};


// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(40).toString("hex");
//   console.log(resetToken)

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordtoken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordtokenExpiry = Date.now() + 15 * 60 * 1000;

  return resetToken;
};




module.exports = userSchema