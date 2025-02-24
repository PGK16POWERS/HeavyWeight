const express = require("express");
const app = express();
require("dotenv").config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.listen(ProcessingInstruction.env.PORT, () => {
    console.log("Go Heavy Or Go Home.")
})