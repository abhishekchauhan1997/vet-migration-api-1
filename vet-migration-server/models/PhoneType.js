const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonetype = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      required: true,
      trim: true,
    },
    sms: {
      type: Number,
      default: 8, // 7 is for yes and 8 is for no
    },
    status: {
      type: Number,
      default: 1, // 1 is for active and 2 is for Inactive.
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const Phonetype = mongoose.model("phone_type", phonetype);
module.exports = Phonetype;
