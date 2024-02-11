import userSchema from "../Model/userModel.js";


export const login=async (req,res)=>{
    try {
      let {email,password} =req.body 
      const user=await userSchema.findOne({$and:{email,password}}) 
    } catch (error) {
        console.log(error);
    }
}

export const clientRegister= async (req,res)=>{
    try {
        console.log('heloooooooooooooooo');
        let {name,email,phonenumber,password}=req.body
        console.log(req.body);
        const newUser=await userSchema.create({name,email,phonenumber,password})
        console.log(newUser);
    } catch (error) {
        
    }
}

