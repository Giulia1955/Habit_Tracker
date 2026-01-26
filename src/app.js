import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js"

const connection = await connectDB();

connection.on("error", (error) => {
    console.error("connection error: ", error);
});

connection.once("open", () => {
    console.log("connection well succeed")
})

const app = express();
routes(app);

export default app;