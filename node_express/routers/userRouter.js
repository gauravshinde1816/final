const express = require("express")
const User = require("../models/User")
const router = express.Router()

router.get("/test" , (req , res)=>{
    res.send("User routes")
})


// Create User
router.post("/" ,  async (req , res)=>{
    try {
        console.log("POST route" , req.body)
        const {name , password , address , phoneNo , age } = req.body
        let newUser = new User({name , password , address , phoneNo , age })
        newUser.save()
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
})

// render add user form
router.get("/add/form" ,  (req , res)=>{
    res.render("addUserForm.ejs")
})



// Read Users
router.get("/" ,  async(req , res)=>{
    try {
        const users = await User.find({})
        res.render("index.ejs" ,  {userList:users })
    } catch (error) {
        console.log(error)
    }
})

// get users by id
router.get("/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if(!user){
           return res.status(400).json({msg: " User not Found"})  
        }
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
})


// get update form
router.get("/:id/update/form" , async  (req , res)=>{
    const id = req.params.id
    const user = await User.findById(id)
    res.render("userItem.ejs" , {user})
})


// update user
router.post("/update/:id" ,  async (req , res)=>{
    try {
        const {name , password , address , phoneNo , age } = req.body
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id ,  {name , password , address , phoneNo , age })
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
})


// delete user
router.post("/delete/:id" , async(req , res)=>{
    try {
        console.log("delete user")
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
})




module.exports = router