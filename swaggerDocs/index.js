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
      //auth
      './swaggerDocs/auth/login.js',
      './swaggerDocs/auth/signup.js',
      './swaggerDocs/auth/forgetPassword.js',
      './swaggerDocs/auth/verifyOtp.js',
      './swaggerDocs/auth/resetPassword.js',
      //Student
      './swaggerDocs/student/studentPost.js',
      './swaggerDocs/student/studentGetById.js',
      './swaggerDocs/student/studentDeleteById.js',
      './swaggerDocs/student/studentDeleteAll.js',
      './swaggerDocs/student/studentGetAll.js',
      './swaggerDocs/student/studentUpdateById.js',
      //Student Images
      './swaggerDocs/studentImageUpload/studentImageUpload.js',
      './swaggerDocs/studentImageUpload/studentImageGetById.js',
      './swaggerDocs/studentImageUpload/studentImageGetAllList.js',
      './swaggerDocs/studentImageUpload/studentImageUpdateById.js',
      './swaggerDocs/studentImageUpload/studentImageDeleteById.js',
      './swaggerDocs/studentImageUpload/studentImageDeleteAllList.js',
    ],
  }
  const swaggerSpec= swaggerJsDoc(option)
  module.exports = swaggerSpec;