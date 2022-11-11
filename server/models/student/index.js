import mongoose from "mongoose";
let StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
   
   
    // id: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    password: {
        type: String,
        required: true
    },
   
});
export default mongoose.model("User", StudentSchema, "user");