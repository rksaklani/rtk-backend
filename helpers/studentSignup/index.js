const StudentLogin = require("../../models/auth/login/login");
const jwt=require("jsonwebtoken")
const dotenv = require("dotenv");
const Token = require("../../models/auth/token/token");
dotenv.config({ path: "./config.env" });
const JWT_SECRET = process.env.JWT_SECRET;
let studentGetSignup = async (_req, res) => {
    try {
      const user = await StudentLogin.find();
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  // const signup = async (data) => {
  //   let user = await User.findOne({ email: data.email });
  //   if (user) {
  //     throw new Error("Email already exist", 422);
  //   }
  //   user = new User(data);
  //   const token = JWT.sign({ id: user._id }, JWT_SECRET);
  //   await user.save();
  
  //   return (data = {
  //     userId: user._id,
  //     email: user.email,
  //     name: user.name,
  //     token: token,
  //   });
  // };


let studentPostSignup = async (req, res) => {
    const {name,email,password,confirm_Password}=req.body;
if (!name,!email,!password,!confirm_Password){
   return res.status(400).json({error:"plz enter the data"})
}
try{
//exit or not
const userData=await StudentLogin.findOne({email});

if(userData){
  res.status(400).json({error:"Email Already exist "})
}else if(password!= confirm_Password){
   return res.status(422).json({error:"password not matching"});
}else{
 
   const user=new StudentLogin({name,email,password,confirm_Password})
   await user.save()
   const token = jwt.sign({ id: user._id }, JWT_SECRET);
   const users= new Token({token,userId:user._id })
    await users.save()

   
   res.status(201).json({message:"registered successfully"})
}

}catch(error){
  res.status(500).send(error);
}

  };
  

  module.exports = {
    studentGetSignup,
    studentPostSignup
  };
  
