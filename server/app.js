import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: ".server/uploads",
  filename: function(req, file, result) {
    result(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static(".server/uploads"));

app.post("/uploads", upload.single("file"), (req, res) => {
  const filePath = req.file.path;
  console.log("File uploaded:", filePath);

  res.send("File uploaded!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
