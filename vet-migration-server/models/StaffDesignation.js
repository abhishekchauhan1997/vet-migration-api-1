const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffdesignation = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      default: 1, // 1 is for active and 2 is for Inactive
    },
    code: {
      type: String,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// index for case insensitive unique
staffdesignation.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const Staffdesignation = mongoose.model("staff_designation", staffdesignation);
module.exports = Staffdesignation;
