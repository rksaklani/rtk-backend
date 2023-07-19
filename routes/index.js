 const express = require("express");
const router = express.Router();

const student = require("./student/index");
const studentLogin = require("./auth/studentLogin/index");
const studentSignUp = require("./auth/studentSignup/index");
const studentResetPassword = require("./auth/studentResetPassword/index");
const studentForgetPassword = require("./auth/studentForgetPassword/index");
const studentVerifyingOTP=  require("./auth/studentResetPassword/index");
const studentGetIdByLogin=require("./auth/studentLogin/index")
router.use("/", student);
router.use("/",studentGetIdByLogin)
router.use("/", studentLogin);
router.use("/", studentSignUp);
router.use("/", studentResetPassword);
router.use("/", studentForgetPassword);
router.use("/", studentVerifyingOTP);
module.exports = router;
