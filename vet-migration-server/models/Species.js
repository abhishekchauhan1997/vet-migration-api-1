const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const species = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    desc: {
      type: String,
      trin: true,
    },
    status: {
      type: Number,
      default: 1, // 1 is for active and 2 is for Inactive
    },
  },
  {
    timestamps: true,
  }
);

// index for case insensitive unique
species.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const Species = mongoose.model("species", species);
module.exports = Species;
