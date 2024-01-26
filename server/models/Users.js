const mongoose =require("mongoose"); // require mongoose
//make user schema
const UserSchema = new mongoose.Schema(
    {
        name: {
            type:String
        },
        age: {
            type:Number
        },
        email: {
            type:String
        }
    }
);
const UserModel = mongoose.model("Users",UserSchema);//insert user model


module.exports=UserModel;//export user model
