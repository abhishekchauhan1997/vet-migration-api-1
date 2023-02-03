const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const Country = require("./Country");
const State = require("./State");
const Timezone = require("./TimeZone");
const McLocation = require("./McLocation");
const PhoneType = require("./PhoneType");

const phoneSchema = new Schema(
  {
    _id: false,
    phoneType: {
      type: Schema.Types.ObjectId,
      ref: PhoneType.modelName,
      required: true,
    },
    pnumber: {
      type: String,
      required: true,
      trim: true,
    },
    isDefault: {
      type: Number,
      default: 0,
    },
  },
  { strict: true }
);

const clinic = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bricknMortar: {
      type: Number,
      default: 15,
    },
    referral: {
      type: Number,
      default: 15,
    },
    equine: {
      type: Number,
      default: 15,
    },
    mobile: {
      type: Number,
      default: 15,
    },
    locationId: {
      type: Schema.Types.ObjectId,
      ref: McLocation.modelName,
    },
    address1: {
      type: String,
      required: true,
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
    email: {
      type: String,
      required: true,
      trim: true,
    },
    timezone: {
      type: Schema.Types.ObjectId,
      ref: Timezone.modelName,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
      trim: true,
    },
    endTime: {
      type: String,
      required: true,
      trim: true,
    },
    phone: [phoneSchema],
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

// Change start_seq to have different starting count
clinic.plugin(AutoIncrement, {
  inc_field: "clinicNo",
  start_seq: 1,
});

const Clinic = mongoose.model("clinic", clinic);
module.exports = Clinic;

