const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Plancategory = require("./PlanCategory");
const PlanSubCategory = require("./PlanSubCategory");
const Species = require("./Species");
const Breed = require("./Breed");
const ReminderGrp = require("./ReminderGrp");
const Zrlplan = require("./Zrlplan");
const Vscanplan = require("./Vscanplan");
const Template = require("./Template");

const planitem = new Schema(
  {
    pricingStrategy: {
      type: Number,
      default: 31,
    },
    planItem: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: Plancategory.modelName,
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: PlanSubCategory.modelName,
    },
    unit: {
      type: String,
      required: true,
    },
    lower: {
      type: Number,
      required: true,
    },
    upper: {
      type: Number,
      required: true,
    },
    species: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
      default: null,
    },
    breed: {
      type: Schema.Types.ObjectId,
      ref: Breed.modelName,
      default: null,
    },
    // Status => 1: Active, 2: Inactive
    status: {
      type: Number,
      default: 1,
    },
    remGrpId: {
      type: Schema.Types.ObjectId,
      ref: ReminderGrp.modelName,
      default: null,
    },
    template_id: {
      type: Schema.Types.ObjectId,
      ref: Template.modelName,
      default: null,
    },
    note: {
      type: String,
      default: null,
    },
    reportcard: {
      type: String,
      trim: true,
      default: null,
    },
    znlabs_planid: {
      type: Schema.Types.ObjectId,
      ref: Zrlplan.modelName,
      default: null,
    },
    vscan_planid: {
      type: Schema.Types.ObjectId,
      ref: Vscanplan.modelName,
      default: null,
    },
  },
  { timestamps: true, strict: false }
);

// index for case insensitive unique
planitem.index(
  { planItem: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const Planitem = mongoose.model("planitems", planitem);
module.exports = Planitem;
