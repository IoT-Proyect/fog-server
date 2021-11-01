//mongoose schema
const { Schema, model, models } = require("mongoose");

//schema
const SensorSchema = new Schema({
  idSensor: {
    type: String,
    required: true,
  },
  capturedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  capturedValue: {
    type: Number,
    required: true,
  },
});

module.exports = models.SensorData || model("SensorData", SensorSchema);
