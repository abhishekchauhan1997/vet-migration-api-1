const ObjectId = require("mongoose").Types.ObjectId;
const Clinic = require("../../models/Clinic");
const StockFacility = require("../../models/StockFacility");
const { create: stateCreate } = require("../State/state");
const clinicEmitter = require("../../subscribers/ClinicEmitter");
const v8 = require("v8");

// Create and Save a new Clinic
exports.create = async (body) => {
  try {
    // check if the state is valid id or other
    const { otherState, ...updatedBody } = body;
    if (!ObjectId.isValid(updatedBody.state)) {
      const stateDoc = await stateCreate({
        name: otherState,
        countryid: updatedBody.country,
      });
      updatedBody.state = stateDoc._id;
    }

    const doc = await Clinic.create(updatedBody);
    clinicEmitter.emit("createFacility", StockFacility, doc);
    if (doc) {
      return { status: 1, message: "Clinic added successfully." };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};