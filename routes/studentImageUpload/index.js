const upload = require("../../middleware/image_upload/image_upload");
const {
    studentImageUpload,
    studentImageDownload,
    studentAllImage,
    StudentImageUpdateById,
  StudentImageDeleteById,
  StudentAllImageDelete
  } = require("../../helpers/studentImageUpload/studentImageUpload");
  const express = require("express");
  const router = express.Router();


  router.post("/imageUpload", upload.single("image"), (req, res) => {
    studentImageUpload(req, res);
  });
  router.get("/image_download/:id", (req, res) => {
    studentImageDownload(req, res);
  });

  router.get("/all_student_image", (req, res) => {
    studentAllImage(req, res);
  });
  router.put("/update_student_image/:id",upload.single("image"),  (req, res) => {
    StudentImageUpdateById(req, res);
  });
  router.delete("/delete_student_image/:id", (req, res) => {
    StudentImageDeleteById(req, res);
  });
  router.delete("/delete_all_student_images", (req, res) => {
    StudentAllImageDelete(req, res);
  });



  module.exports = router;