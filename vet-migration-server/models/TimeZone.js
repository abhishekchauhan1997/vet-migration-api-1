const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timezone = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

const Timezone = mongoose.model("timezone", timezone);
module.exports = Timezone;