const {
    studentGetLogin,
    studentPostLogin
    
  } = require("../../../helpers/studentLogin/index");
  const express = require("express");
  const router = express.Router();



router.post("/login", (req, res) => {
    studentPostLogin(req, res);
  });
  
  router.get("/login", (req, res) => {
    studentGetLogin(req, res);
  });
  

  module.exports = router;