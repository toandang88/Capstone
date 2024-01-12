import multer from "multer";
import path from "path";
import cors from "cors";
import { promises as fsPromises } from "fs";

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

  const corsOptions = {
    origin: "*", // Allow any origin, use a specific origin if needed
    credentials: true
  };

  app.use(cors(corsOptions));

  app.post("/uploads", upload.single("file"), (req, res) => {
    const filePath = req.file.path;
    res.send(filePath.split("/").pop());
  });

  app.get("/uploads", (req, res) => {
    res.send("Welcome to the server!");
  });

  app.delete("/uploads/:filename", async (req, res) => {
    const filename = req.params.filename;
    const filePath = "server/uploads/" + filename;
    res.setHeader("Access-Control-Allow-Origin", "*"); // Replace with your frontend origin
    res.setHeader("Access-Control-Allow-Methods", "DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // res.setHeader("Access-Control-Allow-Credentials", "true");

    try {
      await fsPromises.access(filePath);
      await fsPromises.unlink(filePath);
      res.json({ message: `File ${filePath} deleted successfully` });
    } catch (error) {
      console.error("Error deleting file:", error);

      res.status(500).json({ error: "Internal server error" });
    }
  });
}
