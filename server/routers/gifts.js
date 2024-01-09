import { Router } from "express";
import Gifts from "../models/Gifts.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const profile = new Gifts(request.body);

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

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Gifts.findOneAndUpdate(
      { username: request.params.username },
      {
        $set: {
          productname: body.productname,
          price: body.price,
          description: body.description,
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
    const data = await Gifts.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const data = await Gifts.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get("/images", (req, res) => {
  res.send("Welcome to the server!");
});

router.get("/:id", async (request, response) => {
  try {
    const data = await Gifts.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
