import multer from "multer";
import path from "path";
export default function upload(app) {
  const storage = multer.diskStorage({
    destination: "./server/uploads",
    filename: function(req, file, result) {
      result(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });

  const upload = multer({
    storage: storage,
    fileFilter: function(req, file, result) {
      result(null, true);
    }
  });

  app.post("/uploads", upload.single("file"), (req, res) => {
    // const filePath = req.file.path;
    // console.log("File uploaded:", filePath);
    res.send("File uploaded!");
  });

  app.get("/uploads", (req, res) => {
    res.send("Welcome to the server!");
  });
}
