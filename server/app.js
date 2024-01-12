import express from "express";
import mongoose from "mongoose";
import upload from "./upload.js";
import profile from "./routers/profiles.js";
import gifts from "./routers/gifts.js";
import cart from "./routers/cart.js";
import chat from "./chat.js";

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

app.use("/uploads", express.static("server/uploads"));

upload(app);

app.use("/profiles", profile);

app.use("/gifts", gifts);
app.use("/images", express.static("server/images"));

app.use("/cart", cart);

app.use((err, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
  next;
});

// const httpServer = app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
chat(app);

// app.listen(PORT, () => {
//   console.log(`Backend server is listening on port ${PORT}`);
// });
