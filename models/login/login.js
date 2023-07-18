const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
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
    tokens:[
        { token: {
             type: String,
            require:true
         }
         } ],
         resetToken: {
          type: Number,
          default: null
        },
        resetTokenExpires: {
          type: Date,
          default: null
        },
})

  



studentSchemaLogin.methods.generateAuthToken = async function () {
    try {
      const token = jwt.sign({ _id: this._id }, "your_secret_key_here");
      this.tokens = this.tokens.concat({ token });
      await this.save();
      return token;
    } catch (error) {
      throw new Error("Error generating authentication token");
    }
  };
  
//   studentSchemaLogin.pre("save", async function (next) {
//     if (this.isModified("password")) {
//       this.password = bcrypt.hashSync(this.password, 12);
//       this.confirm_Password = bcrypt.hashSync(this.confirm_Password, 12);
//     }
//     next();
//   });


  studentSchemaLogin.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = this.password    // bcrypt.hashSync(this.password, 12);
    }
    if (this.isModified("confirm_Password")) {
      this.confirm_Password = this.confirm_Password    //bcrypt.hashSync(this.confirm_Password, 12);
    }
    next();
  });


  const StudentLogin = mongoose.model('StudentLogin', studentSchemaLogin);
  
  module.exports = StudentLogin;

  