const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const country = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      trim: true,
      uppercase: true,
    },
  },
  { timestamps: true, strict: false }
);

const Country = mongoose.model("country-test", country);
module.exports = Country;
