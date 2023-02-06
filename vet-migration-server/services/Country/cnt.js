const Country = require("../../models/Country");

// Create and Save a Country
exports.create = async (body) => {
  try {
    // Check if country already exists
    const filter = {
      name: { $regex: `^${body.name}$`, $options: "i" },
    };
    const checkDup = await Country.find(filter).lean();
    if (checkDup.length > 0) {
      throw { status: 0, message: "Country already exists" };
    }

    // If country doesn't exist then create a new country doc
    const doc = await Country.create(body);
    if (doc) {
      return { status: 1, message: `${doc.name} added successfully.` };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};