const express=require("express");
const app=express();
const mongoose = require("mongoose");
require('dotenv').config();
const authRoute =require("./routes/auth.js")
const usersRoute =require("./routes/users.js")
const roomsRoute =require("./routes/rooms.js")
const hotelsRoute =require("./routes/hotels.js")
const cookieParser=require("cookie-parser")
const cors =require("cors")


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

connect();

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
})

app.listen(8800,()=>{
    console.log("connecte avec backend .")
})

//jiji / aPpT6oJRoXF62jcR
//mongodb+srv://jiji:<password>@cluster0.9xitniz.mongodb.net/?retryWrites=true&w=majority