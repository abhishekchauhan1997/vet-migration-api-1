const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanType = require("./PlanType");
const PlanCategory = require("./PlanCategory");
const Staff = require("./Staff");
const PlanAction = require("./PlanAction");

const planSubCategory = new Schema(
  {
    planTypeId: {
      type: Schema.Types.ObjectId,
      ref: PlanType.modelName,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: PlanCategory.modelName,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
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
    planActions: [
      {
        type: Schema.Types.ObjectId,
        ref: PlanAction.modelName,
      },
    ],
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
planSubCategory.index(
  { name: 1, categoryId: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const PlanSubCategory = mongoose.model("plan_subcat", planSubCategory);
module.exports = PlanSubCategory;