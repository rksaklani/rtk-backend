 const express = require("express");
const router = express.Router();

const student = require("./student/index");
const studentLogin = require("./auth/studentLogin/index");
const studentSignUp = require("./auth/studentSignup/index");
const studentResetPassword = require("./auth/studentResetPassword/index");
const studentForgetPassword = require("./auth/studentForgetPassword/index");
const studentVerifyingOTP=  require("./auth/studentResetPassword/index");
const studentGetIdByLogin=require("./auth/studentLogin/index")
const studentImageUpload=require("./studentImageUpload/index")
const studentImageDownload=require("./studentImageUpload/index")
const studentAllImage=require("./studentImageUpload/index")
const StudentImageUpdateById= require("./studentImageUpload/index")
const StudentImageDeleteById=require("./studentImageUpload/index")
const StudentAllImageDelete =require("./studentImageUpload/index")
router.use("/", student);
router.use("/",studentGetIdByLogin)
router.use("/", studentLogin);
router.use("/", studentSignUp);
router.use("/", studentResetPassword);
router.use("/", studentForgetPassword);
router.use("/", studentVerifyingOTP);
router.use("/", studentImageUpload);
router.use("/", studentImageDownload);
router.use("/", studentAllImage);
router.use("/", StudentImageUpdateById);
router.use("/", StudentImageDeleteById);
router.use("./",StudentAllImageDelete);
module.exports = router;
