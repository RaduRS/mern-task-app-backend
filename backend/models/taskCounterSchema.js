const mongoose = require("mongoose");

const taskCounterSchema = mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const TaskCounter = mongoose.model("TaskCounter", taskCounterSchema);

module.exports = TaskCounter;
