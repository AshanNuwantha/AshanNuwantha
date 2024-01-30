const mqttService = require("../service/mqttService");

// Change this to point to your MQTT broker
const MQTT_HOST_NAME = "mqtt://192.168.1.21:1883";

var mqttClient = new mqttService(MQTT_HOST_NAME);
mqttClient.connect();

exports.getPublisherPage = async function (req, res) {
  try {
    res.render("../pages/publisher");
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.publishMQTTMessage = async function (req, res) {
  try {
    const topic = req.body.topic;
    const message = req.body.message;
    console.log("publisherController : publisheMQTTMessage is :  "+topic+"  "+message);
    mqttClient.publish(topic, message, {});
    res.status(200).json({ status: "200", message: "Sucessfully published MQTT Message" });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};