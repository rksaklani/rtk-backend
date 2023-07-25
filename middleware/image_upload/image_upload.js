const multer = require("multer");

const fileStorageEngine = new multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./uploads");
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + "--" + (file.originalname));
  },
});

const upload = multer({storage: fileStorageEngine})

module.exports = upload;
