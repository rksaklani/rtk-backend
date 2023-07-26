const {
    studentPostMethod,
    studentGetMethod,
    studentGetById,
    studentUpdateById,
    studentDeleteById,
    studentDeleteAll
  } = require("../../helpers/student/index");
  const express = require("express");
  const router = express.Router();



router.post("/student", (req, res) => {
    studentPostMethod(req, res);
  });
  
  router.get("/student", (req, res) => {
    studentGetMethod(req, res);
  });
  
  router.get("/get_student_by_id/:id", (req, res) => {
    studentGetById(req, res);
  });
  
  router.put("/update_student/:id", (req, res) => {
    studentUpdateById(req, res);
  });
  
  router.delete("/student_delete/:id", (req, res) => {
   studentDeleteById(req, res);
  });

  router.delete("/student_delete", (req, res) => {
    studentDeleteAll(req, res);
   });
  module.exports = router;