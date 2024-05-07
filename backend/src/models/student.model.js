import mongoose , {Schema} from "mongoose"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//----------------------Student schema Design--------------------------------------------
const studentSchema = new Schema(
    {
        StudentID: {
            type:String,
            required: true,
            unique: true,
            index: true,
        },
        PersonalDetails:{
            Name: {
                type: String,
                required:true,
            },
            Gender: {
                type: String,
                required: true,
                enum:['m','f','other']
            },
            Age:{
                type: Number,
                required: true,
            },
            DOB:{
                type: Date,
                required:true,
            },
            Place:{
                type: String,
                required:true,
            }
        },

        Contact: {
            Phone : {
                type:Number,
                required:true,
            },
            Email:{
                type: String,
                required:true,
            },
            Parent_Ph: {
                type:String,
                required:true,
            }
        },

        Accomodation: {
            Room_number: {
                type: Number,
                required:true,
            },
            RoomMate: {
                type:Schema.Types.ObjectId,
                ref: "Student"
            },
            FoodPreference: {
                type: String,
                required:true,
            }

        },

        AcademicDetails: {
            Reg_no: {
                type: Number, 
                required: true,
                unique:true
            },
            Dept: {
                type:String,
                required:true,
            },
        
            Course: {
                type: String,
                required: true,
            },
            Course_ID:{
                type:String,
                required:true
            },

        },
        Photo: {
            type: String, //cloudinary URL
            required: true, 
        },
        Fees_Status: {
            type: String,
            required: true,
            default:"Done",
            enum: ["Done", "Pending"]
        },
        AdmissionDate: {
            type:Date,
            required:true,

        }
    },

    {
        timestamps:true,
    }
)

export const Student  = mongoose.model("Student",studentSchema)