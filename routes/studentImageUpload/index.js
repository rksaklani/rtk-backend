const upload = require("../../middleware/image_upload/image_upload");
const {
    studentImageUpload,
    studentImageDownload,
    studentAllImage
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


  module.exports = router;