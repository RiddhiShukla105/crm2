import mongoose from 'mongoose'

const userModel=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['super_admin','admin','employee'],
        required:true

    },

    //admin

    phoneNumber:{
        type:String
    },
    companyName:{
        type:String
    },
    companyType:{
        type:String
    },
    companyContact:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    position:{
        type:String
    },
    joiningDate:{
        type:String
    },
    status:{
        type:String
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

    
})

export default mongoose.model('users',userModel)

