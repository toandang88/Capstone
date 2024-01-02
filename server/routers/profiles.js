import { Router } from "express";
import Profile from "../models/Profiles.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const profile = new Profile(request.body);

    const data = await profile.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Profile.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// router.get("/:id", async (request, response) => {
//   try {
//     const data = await Profile.find(request.params.id);

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });



export default router;
