import express from "express";
import config from "config";
import {google} from "googleapis"
// const { google } = require("googleapis");
//apiRouter is the alias of the router
let PORT = config.get('PORT')
import apiRouter from "./controllers/api/index.js";



import "./dbConnect.js";

const app = express();


const port = config.get("PORT");

//APP LEVEL MIDDLE WARE
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ success: "HELLO  FROM EXPRESS" });
})

app.use("/", apiRouter);
app.listen(PORT, (req, res) => console.log(`running on ${PORT} `));