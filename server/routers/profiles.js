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

router.put("/:username", async (request, response) => {
  try {
    const body = request.body;

    const data = await Profile.findOneAndUpdate(
      { username: request.params.username },
      {
        $set: {
          username: body.username,
          email: body.email,
          phone: body.phone,
          address: body.address,
          city: body.city,
          zip: body.zip,
          state: body.state,
          img: body.img
        }
      },
      {
        new: true
      }
    );

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

router.get("/:username", async (request, response) => {
  try {
    const username = request.params.username;
    const data = await Profile.find({ username: username });

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
