const State = require("../../models/State");

// Create and Save a State
exports.create = async (body) => {
  try {
    // Check if State already exists
    const filter = {
      name: { $regex: `^${body.name}$`, $options: "i" },
      countryid: body.countryid,
    };
    const checkDup = await State.find(filter).lean();
    if (checkDup.length > 0) {
      throw { status: 0, message: "State already exists" };
    }

    // if the state does not exist for that country, then create a new state doc
    const doc = await State.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    // error handling for dublicate name errors
    if (error.code === 11000) {
      return Promise.reject({
        status: 0,
        message: "State already exists.",
      });
    }
    return Promise.reject(error);
  }
};
