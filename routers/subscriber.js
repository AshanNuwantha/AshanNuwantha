const express = require("express");
const router = express.Router();

var subscriberController = require("../controllers/subscriberController");

// Subscriber Home page Route.
router.get("/", subscriberController.getSubscriberPage);

module.exports = router;