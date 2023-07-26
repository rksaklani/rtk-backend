
const studentImage = require("../../models/studentImageUpload");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const BASE_URL = process.env.BASE_URL
console.log(BASE_URL)
let studentImageUpload = async (req, res) => {
  try {
    if (!req.file) {
      res.send({
        status: 403,
        message: "No file uploaded",
      });
    } else {
      //send response
      let payload = {
        image: BASE_URL +"uploads/" + req.file.filename,
        imageUrl: req.file.path
      };
     
      const user = new studentImage(payload);
      const result = await user.save();

      res.status(201).send(result);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};




  let studentImageDownload = async (req, res) => {
    const studentId = req.params.id;
    console.log(studentId)
    try {
      // Query the student by the 'id' field
      const student = await studentImage.findOne({ _id: studentId });
       console.log(student)
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  let studentAllImage = async (_req, res) => {
    try {
      const user = await studentImage.find();
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  };


  let StudentImageUpdateById = async (req, res) => {
  
    try {
      const _id=req.params.id
      const img=  BASE_URL +"uploads/" + req.file.filename
      const resData = await studentImage.findByIdAndUpdate(
        _id,
        { $set:  { image: img } },
        {
          //it upadte the value
          new: true,
        }
      );
      console.log(resData);
  
      res.status(204).send(resData);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  let StudentAllImageDelete = async (_req, res) => {
    try {
      // Delete all student images
      const result = await studentImage.deleteMany({});
      console.log(result);
  
      res.send(result);
    } catch (err) {
      // Handle any errors that occurred during the process
      res.status(500).send(err);
    }
  };

  let StudentImageDeleteById = async (req, res) => {
    try {
      const _id = req.params.id;
      if (!_id) {
        return res.status(400).send();
      }
  
      const StudentData = await studentImage.findByIdAndDelete(_id);
      if (!StudentData) {
        // If no document found with the given _id, respond with 404 Not Found
        return res.status(404).send();
      }
  
      console.log(StudentData);
      res.send(StudentData);
    } catch (err) {
      // Handle any errors that occurred during the process
      res.status(500).send(err);
    }
  };
  



module.exports = { studentImageUpload,studentImageDownload,studentAllImage,StudentImageUpdateById,StudentImageDeleteById,StudentAllImageDelete};
