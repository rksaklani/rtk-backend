const StudentLogin = require("../../models/login/login");
const bcrypt=require("bcrypt")
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const sendPasswordResetEmail = async (email, resetTokens) => {
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
  <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${resetTokens}</h2>
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
      // console.log(user);
  
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


//run the cron job for expire the token 

// const removeExpiredTokens = async () => {
//   try {
//     const currentTime = new Date();
//     const expirationTime = new Date(currentTime.getTime() + 120000); // Current time + 2 minutes
//     const expiredTokens = await StudentLogin.find({ resetTokenExpires: { $lt: expirationTime } });

//     // for (const student of expiredTokens) {
//     //   student.tokens.token = null;
//     //   student.resetTokenExpires = null;
//     //   await student.save();
//     // }
//     for (const student of expiredTokens) {
//       student.tokens = []; // Remove all tokens by assigning an empty array
//       student.resetTokenExpires = null;
//       await student.save();
//     }
//     console.log("Expired tokens removed from the database");
//   } catch (error) {
//     console.error("Error removing expired tokens:", error);
//   }
// };

// Run the removeExpiredTokens task periodically
// cron.schedule('*/2 * * * *', removeExpiredTokens); // Run every 24 hours (adjust as needed)





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
      const resetTokens =Math.floor((Math.random()*10000)+4);
      user.resetToken = resetTokens;
      user.resetTokenExpires = new Date(Date.now() + 3600000) // Token expires in 1 hour
      await user.save();
  
      // Send the password reset email
      await sendPasswordResetEmail(email, resetTokens);
  
      return res
        .status(200)
        .json({ message: "Password reset email sent successfully", otp:resetTokens });
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
      const { resetToken, password,  email,confirm_Password } = req.body;
      if (!password ) {
        return res.status(400).json({ error: "Please provide both password and confirm password" });
      }
      if (resetToken) {
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
      
        //  await user.resetToken.deleteOne();
      }
      return res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error during password reset" });
    }
  };
  
  // const studentResetPassword = async (userId, token, password ) => {
  //   const { resetToken, password, _id } = req.body;
  //   let passwordResetToken = await StudentLogin.findOne({ _id });
  
  //   if (!passwordResetToken) {
  //     throw new Error("Invalid or expired password reset token");
  //   }
  
  //   console.log(passwordResetToken.token, token);
  
  //   const isValid = await bcrypt.compare(token, passwordResetToken.token);
  
  //   if (!isValid) {
  //     throw new Error("Invalid or expired password reset token");
  //   }
  
  //   const hash = await bcrypt.hash(password, Number(bcryptSalt));
  
  //   await User.updateOne(
  //     { _id: userId },
  //     { $set: { password: hash } },
  //     { new: true }
  //   );
  
  //   // const user = await User.findById({ _id: userId });
  
  //   // sendEmail(
  //   //   user.email,
  //   //   "Password Reset Successfully",
  //   //   {
  //   //     name: user.name,
  //   //   },
  //   //   "./template/resetPassword.handlebars"
  //   // );
  
  //   await passwordResetToken.deleteOne();
  
  //   return { message: "Password reset was successful" };
  // };






  let studentVerifyingOTP= async (req, res) => {

    try {
      const { resetToken, email, } = req.body;
  
      if (!resetToken || !email) {
        return res.status(400).json({ error: "Email is not provided" });
      }
      const data = await StudentLogin.findOne({ email,resetToken});
      console.log(data.resetToken)
      if (data.resetToken && data.email) {
        const currentTime = Date.now();
        const tokenExpires = new Date(data.resetTokenExpires).getTime();
        const timeDifference = tokenExpires - currentTime;
        if (timeDifference < 0) {
          return res.status(400).json({ error: "Token is expired" });
        }
        return res.status(200).json({ message: "OTP is Verified" }); 
        }else{
          return res.status(404).json({ error: "Wrong OTP" });
        }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Wrong OTP" });
    }

  }
  module.exports = {
    studentGetLogin,
    studentPostLogin,
    studentResetPassword,
    studentForgotPassword,
    studentVerifyingOTP
  };
  
