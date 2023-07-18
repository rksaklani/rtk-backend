require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const userRoute = require("./routes");
app.use(cors());
app.use(express.json());
//we need to register our router
app.use("/api" ,userRoute);
// app.use('/student', express.static('./student'))
app.listen(port, () => {
  console.log(`DB connected to port number ${port} `);
});