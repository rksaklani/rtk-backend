const {
    studentResetPassword,
    studentVerifyingOTP
  } = require("../../../helpers/studentLogin/index");
  const express = require("express");
  const router = express.Router();


router.post("/reset-password", (req, res) => {
    studentResetPassword(req, res);
  });
router.post("/verifying-otp", (req, res) => {
    studentVerifyingOTP(req, res);
  });
  

  module.exports = router;