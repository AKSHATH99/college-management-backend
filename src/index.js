import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR WHILE CONNECTING : ", error);
      throw error;
    });
    app.listen(8000, () => {
      console.log(" SERVER LIVE AT  PORT 8000");
    });
  })
  .catch((error) => {
    console.log("CONNECTION FAILED", error);
  });
