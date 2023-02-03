const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantype = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true, strict: false }
);

const Plantype = mongoose.model("plan_type", plantype);
module.exports = Plantype;
