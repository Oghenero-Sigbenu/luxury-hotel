require("dotenv").config();  // allows our project read variables from .env files

const express = require("express");
const sequelize = require("./config/database");
const path = require("path");

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

//importing different routes


const app = express();

// This parses all json request so we can access
// its contents via 'req.body' object
app.use(express.json());
app.use(cors());

// Create a static directory for our uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//setting a base path


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

const PORT = process.env.PORT || 5000

sequelize.sync()
    .then(result => {
        //create a server and listens
        app.listen(PORT, () =>  console.log("Server is running on PORT 5000"))
    })
        .catch((err) => console.log(err || "failed to connect"));
