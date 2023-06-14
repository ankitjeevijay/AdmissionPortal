const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const CourseController = require('../controllers/CourseController')
const Admin_auth = require('../middleware/auth')
const AdminController = require('../controllers/AdminController')




// user route
router.get('/', UserController.Login)
router.get('/home',Admin_auth, UserController.Home)
router.get('/about',Admin_auth, UserController.About)
router.get('/contact',Admin_auth, UserController.Contact)
router.post('/contactInsert',Admin_auth,UserController.ContactInsert)
router.get('/Registration',UserController.Registration)
router.post('/registerInsert', UserController.RegisterInsert)
router.post('/veryfyLogin',UserController.VeryfyLogin)
router.get('/logout',UserController.Logout)

// Btech course route
router.get('/btechForm',Admin_auth, CourseController.BtechForm)
router.post('/btechFormInsert',Admin_auth, CourseController.BtechFormInsert)
router.get('/btechFormDisplay',Admin_auth, CourseController.BtechFormDisplay)
router.get('/btechFormView/:id',Admin_auth, CourseController.BtechFormView)
router.get('/btechFormEdit/:id',Admin_auth, CourseController.BtechFormEdit)
router.post('/btechFormUpdate/:id',Admin_auth, CourseController.BtechFormUpdate)
// BCA course route
router.get('/BcaForm',Admin_auth, CourseController.BCAForm)
router.post('/bcaFormInsert',Admin_auth,CourseController.BCAFormInsert)
router.get('/bcaformdisplay',Admin_auth, CourseController.BCAFormDisplay)
router.get('/bcaFormView/:id',Admin_auth, CourseController.BCAFormView)
router.get('/bcaFormEdit/:id',Admin_auth, CourseController.BCAFormEdit)
router.post('/bcaFormUpdate/:id',Admin_auth, CourseController.BCAFormUpdate)
// MCA course router
router.get('/mcaForm',Admin_auth, CourseController.MCAForm)
router.post('/mcaFormInsert',Admin_auth,CourseController.MCAFormInsert)
router.get('/mcaformdisplay',Admin_auth, CourseController.MCAFormDisplay)
router.get('/mcaFormView/:id',Admin_auth, CourseController.MCAFormView)
router.get('/mcaFormEdit/:id',Admin_auth, CourseController.MCAFormEdit)
router.post('/mcaFormUpdate/:id',Admin_auth, CourseController.MCAFormUpdate)

// Admin components router
router.get('/adminDashboard',Admin_auth, AdminController.DisplayData)
router.get('/admin/recentContact', AdminController.RecentContact)
router.get('/admin/userDisplay', AdminController.UserDisplay)
router.get('/admin/userFormDisplay',AdminController.userFormDisplay)
router.get('/admin/formView/:id', AdminController.UerFormView)
router.get('/changePassword',Admin_auth, AdminController.ChangePassword)
router.post('/updatepassword/:id',Admin_auth, AdminController.UpdatePassword)
router.get('/viewProfile/:id',Admin_auth, AdminController.ViewProfile)
router.get('/editProfile/:id',Admin_auth, AdminController.EditProfile)
router.post('/updateProfile/:id',Admin_auth, AdminController.UpdateProfile)


module.exports = router
