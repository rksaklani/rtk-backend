const StudentLogin = require("../../models/login/login");


let studentGetSignup = async (_req, res) => {
    try {
      const user = await StudentLogin.find();
      // console.log(user);
  
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  };



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
   
   res.status(201).json({message:"registered successfully"})
}

}catch(error){
  console.log(error);
}

  };
  

  module.exports = {
    studentGetSignup,
    studentPostSignup
  };
  
