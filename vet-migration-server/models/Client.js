const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const Title = require("./Title");
const State = require("./State");
const Country = require("./Country");
const Staff = require("./Staff");
const Reference = require("./Reference");
const Discount = require("./Discount.js");
const Relationship = require("./Relationship");
const PhoneType = require("./PhoneType");

const clientregistration = new Schema(
  {
    f_clientid: {
      type: String,
      required: true
    },
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
    },
    title: {
      type: Schema.Types.ObjectId,
      ref: Title.modelName,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
      required: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
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
    phone: [
      {
        _id: false,
        phoneType: {
          type: Schema.Types.ObjectId,
          ref: PhoneType.modelName,
        },
        // 0 => undefined, 1 => active
        isDefault: {
          type: Number,
          default: 0,
        },
      },
    ],
    // 8 => no, 7 => yes
    reminders: {
      type: Number,
      default: 0,
    },
    // 8 => no, 7 => yes
    announcements: {
      type: Number,
      default: 0,
    },
    // 8 => no, 7 => yes
    statements: {
      type: Number,
      default: 0,
    },
    // 8 => no, 7 => yes
    declineEmail: {
      type: Number,
      default: 0,
    },
    // 8 => no, 7 => yes
    smsDecline: {
      type: Number,
      default: 0,
    },
    preferredProvider: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
    // 8 => no, 7 => yes
    isInterest: {
      type: Number,
      default: 0,
    },
    // 8 => no, 7 => yes
    isDiscount: {
      type: Number,
      default: 0,
    },
    // 1 => active, 2 => inactive
    status: {
      type: Number,
      default: 1,
    },
    // 8 => no, 7 => yes
    isLoyalty: {
      type: Number,
      default: 0,
    },
    referredBy: {
      type: Schema.Types.ObjectId,
      ref: Reference.modelName,
    },
    // discount: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: Discount.modelName,
    //   },
    // ],
    cdetails: [
      {
        _id: false,
        phoneType: {
          type: Schema.Types.ObjectId,
          ref: PhoneType.modelName,
        },
        relationship: {
          type: Schema.Types.ObjectId,
          ref: Relationship.modelName,
        },
      },
    ],
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// Change start_seq to have different starting count
clientregistration.plugin(AutoIncrement, {
  inc_field: "clientNo",
  start_seq: 1,
});

const Client = mongoose.model("client", clientregistration);
module.exports = Client;

