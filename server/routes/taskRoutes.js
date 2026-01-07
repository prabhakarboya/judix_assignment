const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const { protect } = require("../middleware/auth");

// Protected routes for tasks
router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router.route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
