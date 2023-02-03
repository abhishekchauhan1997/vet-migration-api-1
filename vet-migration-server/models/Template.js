const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const template = new Schema({
  template_id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    unique: true,
  },
  html: {
    type: Object,
    default: {},
  },
});

template.index({
  template_id: 1,
});

module.exports = mongoose.model("templates", template);

