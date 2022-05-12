const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()


const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://gaurav:gaurav123@cluster0.ffhnw.mongodb.net/mock_testdb?retryWrites=true&w=majority")
        console.log("Database conneted")
    } catch (error) {
        console.log(error)
    }
}


connectDB()

app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname ,  "public")))



app.get("/" , (req , res)=>{
    res.render("index.ejs" ,  {name : "Gaurav"})
})
app.get("/about" ,  (req , res)=>{
    res.render("about.ejs")
})


// user Routes
app.use("/users" , userRouter )


const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`server has started ${PORT}`)
})