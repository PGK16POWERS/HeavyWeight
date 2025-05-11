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
});

// NEWSLETTER ROUTE
app.post("/newsletter/subscribe", async (req,res) => {
    const {email} = req.body;
    console.log("Inputed email address: " + email);

    try {

        if (email = "user is already subscribed") {
            res.status(400).json({
                status: 400,
                message: "User is already subscribed.",
            });
        } else if (email = "not in the database") {
            res.status(200).json({
                status: 200,
                message: "User subscribed successfully."
            });
        }

    } catch (error) {

        console.log("Error we experienced: " + error);

        res.status(500).json({
            status: 500,
            message: "Internal server error"
        });

    }

});

app.listen(process.env.PORT, () => {
    console.log("Go Heavy Or Go Home.")
})