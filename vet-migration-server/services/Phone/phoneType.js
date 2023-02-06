const Phonetype = require("../../models/PhoneType");

// Create and Save a new Phone type
exports.create = async (body) => {
  try {
    const doc = await Phonetype.create(body);
    if (doc) {
      return { status: 1, message: "Phone type added successfully" };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};