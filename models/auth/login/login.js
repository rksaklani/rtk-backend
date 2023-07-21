const mongoose = require('mongoose');
const jwt=require("jsonwebtoken")
const Token = require('../token/token');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const SECRET_KEY = process.env.SECRET_kEY;
const studentSchemaLogin = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type: String,
        unique: true, 
    },
    confirm_Password:{
        type: String,
        unique: true, 
    },
})

  studentSchemaLogin.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = this.password    // bcrypt.hashSync(this.password, 12);
    }
    if (this.isModified("confirm_Password")) {
      this.confirm_Password = this.confirm_Password    //bcrypt.hashSync(this.confirm_Password, 12);
    }
    next();
  });




  studentSchemaLogin.methods.generateAuthToken = async function () {
    try {
      const token = jwt.sign({ _id: this._id }, SECRET_KEY);
      // Create and save the token as a separate document in the 'Token' collection
      await Token.deleteMany({ userId: this._id });
      const tokenDocument = new Token({ userId: this._id, token });
      await tokenDocument.save();
      return token;
    } catch (error) {
      throw new Error('Error generating authentication token');
    }
  };
  
  const StudentLogin = mongoose.model('StudentLogin', studentSchemaLogin);
  
  module.exports = StudentLogin;