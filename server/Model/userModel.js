import mongoose from "mongoose";

const userSchema= new mongoose.Schema ({
      name:{
        type:String
      },
      email:{
        type:String
      },
      phonenumber:{
        type:String
      },
      password:{
        type:String
      },
      isVerified:{
        type:Boolean
      }
},
{
    timestamps:true
})

const User= mongoose.model('User',userSchema)


export default User