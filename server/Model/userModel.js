import mongoose from "mongoose";

const userSchema= new mongoose.Schema ({
      name:{
        type:"string"
      },
      email:{
        type:"string"
      },
      phonenumber:{
        type:"string"
      },
      password:{
        type:"string"
      },
      // isVerified:{
      //   type:Boolean
      // }
},
{
    timestamps:true
})

const User= mongoose.model('User',userSchema)


export default User