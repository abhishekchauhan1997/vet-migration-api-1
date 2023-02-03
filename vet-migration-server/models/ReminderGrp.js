const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remindergrp = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    remMail: {
      type: Number,
      default: 15,
    },
    remEmail: {
      type: Number,
      default: 15,
    },
    remSms: {
      type: Number,
      default: 15,
    },
    remEncList: {
      type: Number,
      default: 15,
    },
    remPhone: {
      type: Number,
      default: 15,
    },
    remStatements: {
      type: Number,
      default: 15,
    },
    remInvoices: {
      type: Number,
      default: 15,
    },
    remFuture: {
      type: Number,
      default: 15,
    },
    factor: {
      type: Number,
      default: 15,
    },
    pastServices: {
      type: Number,
      default: 15,
    },
    status: {
      type: Number,
      default: 1,
    },
    childCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// index for case insensitive unique
remindergrp.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);

const ReminderGrp = mongoose.model("remindergrp", remindergrp);
module.exports = ReminderGrp;

