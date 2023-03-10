const {
    client_reg_services,
  } = require("../../services");
  
  // Create and Save a new Client
  exports.create = async (req, res) => {
    const body = req.body;
    try {
      const data = await client_reg_services.create(body);
      res.status(201).json(data);
    } catch (error) {
      console.log("error", error.message);
      res.status(500).json(error);
    }
  };
  