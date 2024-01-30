const mqtt = require("mqtt");

class MQTTService {
  constructor(host, messageCallback) {
    this.mqttClient = null;
    this.host = host;
    this.messageCallback = messageCallback;
  }

  connect() {
    this.mqttClient = mqtt.connect(this.host); // connect to mqtt broker
    console.log("mqttService : connect is :  "+this.host);
    // MQTT Callback for 'error' catch event
    this.mqttClient.on("error", function(err){
      console.log(err);
      this.mqttClient.end();
    });

    // MQTT Callback for 'connect' event
    this.mqttClient.on("connect", function(){
      console.log('MQTT client connected');
    });

    // Call the message callback function when message arrived
    this.mqttClient.on("message", function (topic, message) {
      console.log(message.toString());
      if (this.messageCallback) this.messageCallback(topic, message);
    });

    this.mqttClient.on("close", function(){
      console.log('MQTT client disconnected');
    });
  }

  // Publish MQTT client Message
  publish(topic, message, options) {
    console.log("mqttService : publish clinet is :  "+topic+"  "+message);
    this.mqttClient.publish(topic, message);
  }

  // Subscribe MQTT client Message
  subscribe(topic, options) {
    this.mqttClient.subscribe(topic, options);
  }
}

module.exports = MQTTService;