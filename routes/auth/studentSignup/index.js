const {
    studentGetSignup,
    studentPostSignup
    
  } = require("../../../helpers/studentSignup");
  const express = require("express");
  const router = express.Router();



router.post("/signup", (req, res) => {
    studentPostSignup(req, res);
  });
  
  router.get("/signup", (req, res) => {
    studentGetSignup(req, res);
  });
  

  module.exports = router;