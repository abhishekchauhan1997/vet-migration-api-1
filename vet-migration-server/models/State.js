const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = require("./Country");

const state = new Schema(
  {
    countryid: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    abbreviation: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

// index for case insensitive unique
state.index(
  { name: 1, countryid: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const State = mongoose.model("state_test", state);
module.exports = State;

