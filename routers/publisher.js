const express = require("express");
const router = express.Router();

var publisherController = require("../controllers/publisherController");

// Publisher get method Route.
router.get("/", publisherController.getPublisherPage);
// Publisher post method  publisher button Route.
router.post("/", publisherController.publishMQTTMessage);

module.exports = router;