import mongoose from "mongoose";
const users_schema=new mongoose.Schema({ 
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
        }
})
    export default mongoose.models.users || mongoose.model("users", users_schema);
