const Title = require("../../models/Title");

// Create and Save a title
exports.create = async (body) => {
  try {
    const doc = await Title.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

