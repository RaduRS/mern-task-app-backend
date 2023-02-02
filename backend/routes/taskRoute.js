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
router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
