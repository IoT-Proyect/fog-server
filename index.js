const dbConnect = require("./db/connection");
const SensorDataModel = require("./db/models/SensorDataModel");
// Connect to the database
dbConnect();

//mqtt client
const mqttClientConfig = { brocker: "mqtt://localhost" };
const mqttClient = require("./mqtt");

const client = new mqttClient(mqttClientConfig);

client.connect();
client.subscribe("fog/data");
client.onMessage("fog/data", async function (topic, message) {
  const data = JSON.parse(message);
  const sensorData = new SensorDataModel(data);
  sensorData.save().then(() => {
    // Send to cloud server after saving to local db
  });
});
