const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, }))
app.use("/api/goals", require("../routes/goalRoutes"));

app.listen(PORT, () => console.log(`server started in ${ PORT }`))