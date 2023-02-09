const ClientRegistration = require("../../models/Client");
const Clinic = require("../../models/Clinic");
const State = require("../../models/State");
const Country = require("../../models/Country");
const Title = require("../../models/Title");
const Phonetype = require("../../models/PhoneType")
const { create: stateCreate } = require("../State/state");
const { create: countryCreate } = require("../Country/cnt");
const { create: titleCreate } = require("./title");
const { create: phoneTypeCreate } = require("../Phone/phoneType")

// Create and Save a new Client
exports.create = async (body) => {
    //console.log(body);
  try {
    // Create a new client doc
      console.log("body length",body.length)
    for(let i=0; i<body.length; i++){
      const { clinic, state, country, title, phoneType } = body;

      const newClient = new ClientRegistration(body)
      console.log("newClient",newClient);

        const updatedClinic = await Clinic.find({ name : clinic});
          newClient.clinic = updatedClinic._id;

        const updatedCountry = await Country.find({ country : country});
           if(updatedCountry){
            newClient.country = updatedCountry._id;
           }else{
             const countryDoc = await countryCreate({
                 name: country
             })
             newClient.country = countryDoc._id;
           }

        const updatedState = await State.find({ state : state})
           if(updatedState){
              newClient.state = updatedState._id;
           }else{
            const stateDoc = await stateCreate({
              name: state,
              countryid: newClient.country,
          });
          newClient.state = stateDoc._id;
           }

        const updatedTitle = await Title.find({ title : title})
           if(updatedTitle){
             newClient.title = updatedTitle._id;
           }else{
            const titleDoc = await titleCreate({
                title: title
            });
            newClient.title = titleDoc._id;
           }

        const updatedphoneType = await Phonetype.find({name : phoneType})
           if(updatedphoneType){
             newClient.phone.phoneType = updatedphoneType._id;
           }else{
             const phoneTypeDoc = await phoneTypeCreate({
                 name: phoneType
             })
             newClient.phone.phoneType = phoneTypeDoc._id;
           }

     const doc = await newClient.save(); 
     if (doc) {
      return {
        status: 1,
        message: "Client added successfully.",
        clientId: doc._id,
      };
    }

    }

  } catch (error) {
    console.log("error", error.message);
    return Promise.reject(error);
  }
};
