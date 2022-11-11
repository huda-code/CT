// import config from "config";
// import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "../dbConnect.js";
import User from "../models/student/index.js";


async function StudentSeed() {
    try {
        let user = {
            name: "User1",
            password: "Temp@1234",
            email:"user1@cfi.com",
            role: "user"
        }
        user.password = await bcrypt.hash(user.password, 12)
        let userData = new User(user);
       
        await userData.save();
        console.log("Student Seeded Successfully");
// 


// 

    } catch (error) {
        console.error(error);
    }
}
StudentSeed();