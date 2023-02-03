const express = require("express");
const router = express.Router();

const { client } = require("../controllers/Client");

router.post("/add", client.create);


module.exports = router;
