const express = require("express");
const app = express();
require("dotenv").config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json(message = "Heavy Weight");
})

app.listen(process.env.PORT, () => {
    console.log("Go Heavy Or Go Home.")
})