const swaggerJsDoc=require("swagger-jsdoc")

const option={
    definition:{
      openapi:"3.0.0",
      info:{
        title:"rtk-backend",
        version:"1.0.0"
      },
      servers:[
        {
          url:"http://localhost:5000/"
        }
      ]
    },
    apis: [
      './swaggerDocs/auth/login.js',
      './swaggerDocs/auth/signup.js',
      './swaggerDocs/student/student.js',
      './swaggerDocs/studentImageUpload/studentImageUpload.js',
      './swaggerDocs/studentImageUpload/studentImageGetById.js',
      './swaggerDocs/studentImageUpload/studentImageGetAllList.js',
    ],
  }
  const swaggerSpec= swaggerJsDoc(option)
  module.exports = swaggerSpec;