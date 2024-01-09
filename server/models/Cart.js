import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  grandtotal: {
    type: String
  },
  recipient: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  state: {
    type: String
  }
});

const cart = mongoose.model("Cart", cartSchema);
export default cart;
