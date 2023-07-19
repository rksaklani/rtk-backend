const StudentLogin = require("../../models/login/login");
// const bcrypt=require("bcrypt")
const nodemailer = require('nodemailer');
const sendPasswordResetEmail = async (email, otp) => {
  // Create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    // Configure the transporter options
    // first go to your google manage account and 
    // step-1 : click to Security  and  allow the 2-step auth 
    // step-2 : click to  2-step auth  and go to the app password and set the app password
     host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "rksaklani9090@gmail.com",
      pass: "qsgdlsprkeddzdwg"
    },
    secureConnection: false,
    secure: false,
  });

  // Create the email content
  const mailOptions = {
    from: "rksaklani9090@gmail.com",
    to: email,
    subject: "PASSWORD RECOVERY",
    html: `<!DOCTYPE html>
<html lang="en" >
<head>
<meta charset="UTF-8">
<title>CodePen - OTP Email Template</title>


</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
<div style="margin:50px auto;width:70%;padding:20px 0">
  <div style="border-bottom:1px solid #eee">
    <h6  style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Rk Saklani </h6>
  </div>
  <p style="font-size:1.1em">Hi,</p>
  <p>Thank you for choosing my journey. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
  <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
  <p style="font-size:0.9em;">Regards,<br />Rk Saklani</p>
  <hr style="border:none;border-top:1px solid #eee" />
  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
    <p>Rk Saklani Inc</p>
    <p>1600 Amphitheatre Parkway</p>
    <p>California</p>
  </div>
</div>
</div>
<!-- partial -->

</body>
</html>`,
  };

  // Send the email
 transporter.sendMail(mailOptions) 
   
};









let studentGetLogin = async (_req, res) => {
    try {
      const user = await StudentLogin.find();
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  let studentGetIdByLogin = async (req, res) => {
    try {
      const _id=req.params.id
      const user = await StudentLogin.findOne({ _id });
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  };




  let studentPostLogin = async (req, res) => {
    try {
   
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Please enter the data" });
      }
      const userStudent = await StudentLogin.findOne({ email:email });
      console.log(userStudent);
  
      // Verifying the password in the database
      if (userStudent) {
        try {
          // const hashedPassword = await bcrypt.hashSync(password, 12);
          // const isMatch = await bcrypt.compare(password, userStudent.password);
      
          const isMatch = password===userStudent.password
          //removing the previous token 
          userStudent.tokens = [];
           await userStudent.save();
          //Token generation
          const token = await userStudent.generateAuthToken();
          console.log(token);
          // Creating cookie
          res.cookie("token", token, {
            // Expire the token and timing when it expires
            // expires: new Date(Date.now() + 25892000000),
            expires: new Date(Date.now() + 120000),
            // Where we add the cookie
            httpOnly: true
          });
  
          if (!isMatch) {
            return res.status(400).json({ error: "Invalid Credentials" });
          } else {
            // Sending token in the response
            return res.status(200).json({ message: "Your login was successful" ,token:token});
          }
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Error during password comparison or token generation" });
        }
      } else {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error during user retrieval" });
    }
  };



  let studentForgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Please enter your email" });
      }
      const user = await StudentLogin.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    
  
      // Generate a reset token and save it in the user document
      const otp =Math.floor(Math.random() * 9000) + 1000
      const expires_In=new Date(Date.now() + 36000) 
      
      user.otp = otp;
      user.expires_In = expires_In
      await user.save();
  
      // Send the password reset email
      await sendPasswordResetEmail(email, otp);
  
      return res
        .status(200)
        .json({ message: "Password reset email sent successfully", status:true,expires_In:expires_In });
    } 
    catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error during password reset process" });
    }
  };
  



  let studentResetPassword = async (req, res) => {
    try {
      const { status, password,  email,confirm_Password } = req.body;
      if (!password ) {
        return res.status(400).json({ error: "Please provide both password and confirm password" });
      }
      if (status) {
        const user = await StudentLogin.findOne({ email });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        // const hashedPassword = await bcrypt.hashSync(password, 12);
        await StudentLogin.updateOne(
          { email: email },
          { $set: {  password, confirm_Password}},
          { new: true }
        );
      
        user.otp = null;
        await user.save();
   
      }
      return res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error during password reset" });
    }
  };
  
  

  let studentVerifyingOTP= async (req, res) => {

    try {
      const { otp, email } = req.body;
  
      if (!otp &&!email) {
        return res.status(400).json({ error: "Email is not provided" });
      }
      const data = await StudentLogin.findOne({ email,otp});
      console.log(data.otp)
      if (data.otp && data.email) {
        const currentTime = Date.now();
        const tokenExpires = new Date(data.expires_In).getTime();
        const timeDifference = tokenExpires - currentTime;
        if (timeDifference < 0) {
          return res.status(400).json({ error: "Token is expired",status:false });
        }
        return res.status(200).json({ message: "OTP is Verified",status:true }); 
        }else{
          return res.status(404).json({ error: "Wrong OTP",status:false });
        }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Wrong OTP" });
    }

  }
  module.exports = {
    studentGetIdByLogin,
    studentGetLogin,
    studentPostLogin,
    studentResetPassword,
    studentForgotPassword,
    studentVerifyingOTP
  };
  
