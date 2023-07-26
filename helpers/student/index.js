const student = require("../../models/student/index");


let studentPostMethod = async (req, res) => {
  const { body } = req;
  try {
    let payload = {
        userId: body.userId,
        id: body.id,
        title: body.title,
        body: body.body,
      };
      const user = new student(payload);
      const result = await user.save();
      res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
};

let studentGetMethod = async (_req, res) => {
  try {
    const user = await student.find();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

let studentGetById = async (req, res) => {
  const studentId = req.params.id;
  try {
    // Query the student by the 'id' field
    const studentData = await student.findOne({ _id: studentId });

    if (!studentData) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Student found, return the student data
    res.json(studentData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



let studentUpdateById = async (req, res) => {
  try {
    const _id = req.params.id;
    const resData = await student.findByIdAndUpdate(_id, req.body, {
      //it update the value
      new: true,
    });
    res.status(202).send(resData);
  } catch (err) {
    res.status(500).send(err);
  }
};

let studentDeleteById = async (req, res) => {
  try {
    const _id = req.params.id;
    const StudentData = await student.findByIdAndDelete(_id, { new: true });
    if (!_id) {
      return res.status(400).send();
    }
    res.send(StudentData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  studentPostMethod,
  studentGetMethod,
  studentGetById,
  studentUpdateById,
  studentDeleteById,
};


