const ClientRegistration = require("../../models/Client");

// Create and Save a new Client
exports.create = async (body) => {
  console.log(body);
 
  try {
    // Create a new client doc

    const doc = await ClientRegistration.insertMany(body);

    if (doc) {
      return {
        status: 1,
        message: "Client added successfully.",
        clientId: doc._id,
      };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
