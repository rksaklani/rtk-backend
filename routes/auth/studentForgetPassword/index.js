const { studentForgotPassword ,} = require("../../../helpers/studentLogin/index");
  const express = require("express");
  const router = express.Router();

router.post("/forgot-password", (req, res) => {
  studentForgotPassword(req, res);
  });
  
 
  

  module.exports = router;