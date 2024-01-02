import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import profile from "./routers/profiles.js";
import upload from "./upload.js";

dotenv.config();

const app = express();
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 3000;

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());

upload(app);

app.use("/profiles", profile);

app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});

app.use((err, res) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});
