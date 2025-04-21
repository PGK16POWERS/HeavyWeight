const express = require("express");
const app = express();
const path = require("path")
require("dotenv").config()

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("heavy-weight/browser"));

app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/heavy-weight/browser/index.html"));
});

// LOGIN ROUTE
app.post("/auth/user/login", (req,res) => {
    const userFormData = req.body;

    try {
        
    } catch (error) {
        
    }
});

// CREATE ACCOUNT ROUTE
app.post("/auth/user/create-account", (req,res) => {
    const userFormData = req.body;

    try {
    } catch (error) {
        
    }
})

app.listen(process.env.PORT, () => {
    console.log("Go Heavy Or Go Home.")
})