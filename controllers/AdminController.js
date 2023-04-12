const CourseModel = require('../models/course/Course')
const UserModel = require('../models/user')


class AdminController{

static DisplayData = async (req, res)=>{
    try{
        const {userName,image, _id, email } = req.user
        res.render('admin/dashboard',{name:userName, i:image})
    }catch(error){
        console.log(error)
    }
}
static UserDisplay = async (req, res)=>{
    try{
        const userdata= await UserModel.find()
        res.render('admin/userDisplay',{data:userdata})

    }catch(error){
        console.log(error)
    }
}
static userFormDisplay = async (req,res)=>{
    try{
        const data = await CourseModel.find()
        res.render('admin/userFormDisplay',{form:data})
    }catch(error){
        consolo.log(error)
    }
}
static UerFormView = async (req, res)=>{
    try{
        const result = await CourseModel.findById(req.params.id)
        res.render('admin/formView',{view:result})
    }catch(error){
        console.log(error)
    }
}





}
 module.exports = AdminController