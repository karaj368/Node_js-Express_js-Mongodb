import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    address:{
        type: String
    }
})

const contactdb = mongoose.model("Contact", contactSchema)
export default contactdb;
