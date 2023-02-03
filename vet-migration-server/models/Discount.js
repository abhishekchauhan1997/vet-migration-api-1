const mongoose = require("mongoose");
const PlanCategory = require("./PlanCategory");
const PlanSubCategory = require("./PlanSubCategory");
const PlanItem = require("./PlanItem");
const Clinic = require("./Clinic");
const Schema = mongoose.Schema;

const discount = new Schema(
  {
    clinicId: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: PlanCategory.modelName,
        },
      ],
      default: null,
    },
    subCategory: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: PlanSubCategory.modelName,
        },
      ],
      default: null,
    },
    planItem: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: PlanItem.modelName,
        },
      ],
      default: null,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    neverExpire: {
      type: Number,
      default: 8, // 7 is for yes and 8 is for no
    },
    validTill: {
      type: Date,
    },
    couponType: {
      type: Number, // 9 is for fixed and 10 is for percentage
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    isdefault: {
      type: Number,
      default: 8, // 7 is for yes and 8 is for no
    },
    status: {
      type: Number,
      default: 1, // 1 is for active and 2 is for Inactive
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

discount.index({ clinicId: 1 });
// index for case insensitive unique
discount.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const Discount = mongoose.model("discount", discount);
module.exports = Discount;
