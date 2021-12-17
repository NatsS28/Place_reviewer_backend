// mongodb + srv://user:<password>@cluster0.ownm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pin");
var cors = require('cors');

dotenv.config();

app.use(express.json());

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://user:user@cluster0.ownm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });

}

connectDB();


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);
cors();

app.listen(8800, () => {
    console.log("Backend server is running!");
});