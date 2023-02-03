const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = require("./Country");
const State = require("./State");

const mclocation = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    street1: {
      type: String,
      required: true,
      trim: true,
    },
    street2: {
      type: String,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    zipcode: {
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
    strict: false,
  }
);

const Mclocation = mongoose.model("mclocation", mclocation);
module.exports = Mclocation;
