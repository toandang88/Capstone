import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    validate: /^[0-9]*$/
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String,
    validate: /^[0-9]*$/
  },
  state: {
    type: String,
    validate: /^[A-Za-z ]*$/
  },
  img: {
    type: String
  }
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
