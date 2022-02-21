const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const colors = require("colors");
const PORT = process.env.PORT;
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false, }))

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started in ${ PORT }`))