const express = require("express");
require('dotenv').config()
require("./config/database")

const app = express();
const Routes = require("./routes/routes.js")

const PORT = process.env.PORT || 5000

app.set("port", PORT)

app.use(express.json())
app.use("/api", Routes)

app.listen(PORT, () =>{
    console.log("SERVIDOR CORRIENDO EN PUERTO: "+app.get("port"));
})