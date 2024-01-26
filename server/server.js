const express = require("express");//require express
const app = express();//let app use express
app.use(express.json())
const mongoose = require("mongoose");//require mongoose for database
//port
const port = process.env.PORT;
//access DB
const username=process.env.USERNAME,
      password=process.env.PASSWORD,
      database=process.env.DB;
//connect to mongoose
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xlbuwou.mongodb.net/${database}?retryWrites=true&w=majority`);
//insert user model
const UserModel = require('./models/Users.js');
//using cors to let client access server
const cors =require("cors");
app.use(cors());
//get endpoint
app.get("/users",async(req,res)=>{
    const users = await UserModel.find();
    res.json(users);
})

//send user endpoint
app.post("/sendUser",async(req,res)=>{
    const user = req.body;
    const newUser= new UserModel(user);
    await newUser.save();
    res.json("done");
})


//listen to server
app.listen(port,()=>{
    console.log("running server..");
})