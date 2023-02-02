const expres = require("express");
const router = expres.Router();
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

//.Routes
router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);

module.exports = router;
