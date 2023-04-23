const CourseModel = require('../models/course/Course')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


class AdminController{

static DisplayData = async (req, res)=>{
    try{
        const {userName,image, _id, email } = req.user
        res.render('admin/dashboard',{name:userName, i:image, id:_id})
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
static ChangePassword = async (req, res)=>{
    try{
        const {userName, _id, email } = req.user
        res.render('admin/changePassword',{id:_id,name:userName,message: req.flash('error')})

    }catch(error){
        console.log(error)
    }
}
static UpdatePassword = async (req, res)=>{
    try{
       // console.log(req.body)
       const {oldpassword, newpassword, confirmpassword} = req.body
       if(oldpassword && newpassword && confirmpassword){
        if(newpassword == confirmpassword){
            const user = await UserModel.findById(req.params.id).select("+password")
            //console.log(user)
            const isMatch = await bcrypt.compare(oldpassword, user.password)
            if(isMatch){
                const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(newpassword,salt)
                await UserModel.findByIdAndUpdate(req.params.id,{
                    $set:{password:newHashPassword} 
                });
                req.flash('error','Password Updated successfully')
                    res.redirect('/changePassword')
               
            }else{
                req.flash('error','old password is incorrect')
                res.redirect('/changePassword')
            }

        }else{
            req.flash('error','New password and old password does not matched')
            res.redirect('/changePassword')  
        }

       }else{
        req.flash('error','All field are required')
        res.redirect('/changePassword')
       }
    }catch(error){
      console.log(error)  
    }
}





}
 module.exports = AdminController