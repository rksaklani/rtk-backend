
const studentImage = require("../../models/studentImageUpload");


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
        image: "uploads/" + req.file.filename,
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



module.exports = { studentImageUpload,studentImageDownload,studentAllImage };
