const mqtt = require("mqtt");

class MqttClient {
  constructor(config) {
    this.config = config;
    this.client = mqtt.connect(config.brocker);

    this.connect = this.connect.bind(this);
    this.publish = this.publish.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.end = this.end.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }

  connect() {
    this.client.on("connect", () => {
      console.log("connected");
    });
  }

  publish(topic, message) {
    this.client.publish(topic, message);
  }

  subscribe(topic) {
    this.client.subscribe(topic);
  }

  unsubscribe(topic) {
    this.client.unsubscribe(topic);
  }

  end() {
    this.client.end();
  }

  onMessage(topic, callback) {
    this.client.on("message", (_topic, _message) => {
      if (topic === _topic) {
        callback(_topic, _message);
      }
    });
  }
}

module.exports = MqttClient;
