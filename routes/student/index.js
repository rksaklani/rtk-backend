const {
    studentPostMethod,
    studentGetMethod,
    studentGetById,
    studentUpdateById,
    studentDeleteById,
  } = require("../../helpers/student/index");
  const express = require("express");
  const router = express.Router();



router.post("/student", (req, res) => {
    studentPostMethod(req, res);
  });
  
  router.get("/student", (req, res) => {
    studentGetMethod(req, res);
  });
  
  router.get("/student/:id", (req, res) => {
    studentGetById(req, res);
  });
  
  router.put("/student/:id", (req, res) => {
    studentUpdateById(req, res);
  });
  
  router.delete("/student/:id", (req, res) => {
   studentDeleteById(req, res);
  });

  module.exports = router;