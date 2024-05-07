import mongoose , {Schema} from "mongoose";

//------------------------------- LIBRARY SCHEMA---------------------------------

const librarySchema = new Schema({
    BookID : {
        type : String,
        required: true ,
        unique : true ,
        index : true,
    },

    Bookname : {
        type : String,
        required: true ,
    },

    Authorname : {
        type : String,
        required: true ,
    },
    Inlibrary : {
        type: Boolean,
        required : true,
        default: True ,
    },
    CurrentOwner : {
        type:Schema.Types.ObjectId,
        ref: "Student",
    },
    ReturnDate : {
        type: Date,
        
    }
})

export const Library = mongoose.model('Library' , librarySchema)