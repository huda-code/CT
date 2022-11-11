import express from "express";
import { loginValidation,  errorMiddleware } from "../../middleware/validation/index.js"

import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken"
// import token from "jwtwebtoken";

import randomString from "../../utils/randomString.js";

import Student from "../../models/student/index.js";
import Admin from "../../models/Admin/index.js";


const router = express.Router();

/*
METHOD : POST
PUBLIC
API Endpoint : /Progress/login
Body : 
email
password 
*/

router.post("/login", loginValidation(), errorMiddleware, async (req, res) => {

    try {
        let { email, password } = req.body;

        let userFound = await Admin.findOne({ email });
        if (!userFound) {
            userFound = await Student.findOne({ email });
            if (!userFound)
                return res.status(401).json({ "error": "Invalid Credentials" });
        }

        let matchPassword = await bcrypt.compare(password, userFound.password)
        if (!matchPassword) {
            return res.status(401).json({ "error": "Invalid Credentials" })
        }
        if (!userFound.userverified) {
            return res.status(401).json({ "error": "User Email is Not Verified. Please Verify" })
        }
        let payload = {
            _id: userFound._id,
            role: userFound.role
        }

        let privatekey = config.get("PRIVATE_KEY");

        //GENERATE A TOKEN
        const token = jwt.sign(payload, privatekey, { expiresIn: "45d" });

        res.status(200).json({
            "success": "User Logged In Successfully",
            token,
            role: userFound.role
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }
})


/*
End Point : /api/auth
Method GET
Access : Public
Description : Authorise the User
*/

router.get("/auth", async (req, res) => {
    try {
        let token = req.headers["auth-token"];
        if (!token) {
            return res.status(401).json({ error: "Unauthorised Access" });
        }
        let privatekey = config.get("PRIVATE_KEY");
        let payload = jwt.verify(token, privatekey);
        res.status(200).json({ success: "Authentication Successful", payload });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Unauthorised Access" });
    }
})


export default router;