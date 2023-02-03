const mongoose = require("mongoose");
const Species = require("./Species");
const Schema = mongoose.Schema;

const breed = new Schema(
  {
    speciesId: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// index for case insensitive unique
breed.index(
  { name: 1, speciesId: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const Breed = mongoose.model("breed", breed);
module.exports = Breed;
