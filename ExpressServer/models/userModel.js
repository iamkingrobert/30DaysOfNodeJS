import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { v4: uuidv4 } = require("uuid");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },

    email: {
      type: "string",
      required: true,
      unique: true,
    },

    password: {
      type: "string",
      required: true,
    },

    uuid: {
      type: "string",
      default: uuidv4,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//Before I save the user into the database, I perform a check if the user password is modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //I am Hashing the password using bcrypt; which will turn the password into a string of letters and/or numbers
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
