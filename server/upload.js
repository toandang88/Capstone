// import multer from "multer";
// import path from "path";
// import { promises as fsPromises } from "fs";

// export default function upload(app) {
//   const cors = (req, res, next) => {
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type, Accept,Authorization,Origin"
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
//   };
//   const storage = multer.diskStorage({
//     destination: "./server/uploads",
//     filename: function(req, file, result) {
//       result(
//         null,
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//       );
//     }
//   });

//   const upload = multer({
//     storage: storage,
//     fileFilter: function(req, file, result) {
//       result(null, true);
//     }
//   });

//   app.use(cors);

//   app.post("/uploads", upload.single("file"), (req, res) => {
//     const filePath = req.file.path;
//     res.send(filePath.split("/").pop());
//   });

//   app.get("/uploads", (req, res) => {
//     res.send("Welcome to the server!");
//   });

//   app.delete("/uploads/:filename", async (req, res) => {
//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, "server/uploads", filename);

//     try {
//       await fsPromises.access(filePath);
//       await fsPromises.unlink(filePath);
//       res.json({ message: `File ${filePath} deleted successfully` });
//     } catch (error) {
//       console.error("Error deleting file:", error);

//       res.status(500).json({ error: "Internal server error" });
//     }
//   });
// }
