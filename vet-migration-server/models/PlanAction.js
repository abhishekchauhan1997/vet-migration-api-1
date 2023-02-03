const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = require("./Staff");

const planaction = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    class: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
    modifiedBy: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
    status: {
      type: Number,
      default: 1,
    },
    action: {
      type: Array,
      default: null,
    },
  },
  { timestamps: true, strict: false }
);

const Planaction = mongoose.model("planaction", planaction);
module.exports = Planaction;
