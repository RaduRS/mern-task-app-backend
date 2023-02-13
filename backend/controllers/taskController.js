const TaskCounter = require("../models/taskCounterSchema");
const Task = require("../models/taskModel");

//. Create a Task
const createTask = async (req, res) => {
  try {
    const taskCounter = await TaskCounter.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    const task = await Task.create({
      ...req.body,
      placeNumber: taskCounter.count,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

//.Get/Read all Tasks
const getAllTasks = async (req, res) => {
  try {
    // const tasks = await Task.find();
    const tasks = await Task.find({}).sort({ placeNumber: 1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//.Get/Read 1 task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//.Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task with id: ${id}, exist`);
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//.Update task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task with ${id} can be updated`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createTask, getAllTasks, getTask, deleteTask, updateTask };
