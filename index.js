require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express")
const swaggerSpec =require("./swaggerDocs/index")
const port = process.env.PORT || 9000;
const userRoute = require("./routes");

app.use(cors());
app.use(express.json());
 app.use("/uploads", express.static("uploads"));
//we need to register our router
app.use("/api" ,userRoute);
//This is the setup of the swagger
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))


app.listen(port, () => {
  console.log(`DB connected to port number ${port} `);
});