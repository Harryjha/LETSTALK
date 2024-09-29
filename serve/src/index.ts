import express from "express";
import cors from "cors";
import authRoute from "./routes/auth";
import dotenv from "dotenv"; /// used for .env files

dotenv.config();// this also 

const app = express();
app.use(express.json());
app.use(cors());


app.use("/auth", authRoute);
app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
  });
  


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server is runnung on port ${PORT}`);
})