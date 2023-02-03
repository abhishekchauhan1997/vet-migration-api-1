const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const Country = require("./Country");
const State = require("./State");
const StaffDesignation = require("./StaffDesignation");
const Specialization = require("./Specialization");
const PhoneType = require("./PhoneType");

const staff = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
      required: true,
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
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      trim: true,
      required: true,
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
      trim: true,
      required: true,
    },
    zipcode: {
      type: String,
      trim: true,
      required: true,
    },
    personalPhone: {
      _id: false,
      phoneType: {
        type: Schema.Types.ObjectId,
        ref: PhoneType.modelName,
      },
    },
    alternatePhone: {
      _id: false,
      phoneType: {
        type: Schema.Types.ObjectId,
        ref: PhoneType.modelName,
      },
    },
    dob: {
      type: Date,
    },

    // personal_ptype: {
    //   type: Object,
    //   default: null,
    //   required: true,
    // },
    // personal_pnumber: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    designationId: {
      type: Schema.Types.ObjectId,
      ref: StaffDesignation.modelName,
    },
    status: {
      type: Number,
      default: 1,
    },
    isProvider: {
      type: Number,
      default: 15,
    },
    specialization: {
      type: Schema.Types.ObjectId,
      ref: Specialization.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// Change start_seq to have different starting count
staff.plugin(AutoIncrement, {
  inc_field: "staffNo",
  start_seq: 1,
});

const Staff = mongoose.model("staffs", staff);
module.exports = Staff;
