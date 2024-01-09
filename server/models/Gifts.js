import mongoose from "mongoose";

const giftsSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  price: {
    type: String
  },
  description: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  img: {
    type: String
  }
});

const Gifts = mongoose.model("Gifts", giftsSchema);
export default Gifts;
