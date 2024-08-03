const mongoose =require('mongoose')
const EmployeeSchema =new mongoose.Schema({
    username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password:String


})
const EmployeeModel=mongoose.model("Details",EmployeeSchema) //table name=details
module.exports = EmployeeModel