"use client";

import { useEffect, useState } from "react";
import API from "../utils/api";
import ProtectedRoute from "../components/ProtectedRoute";
import TaskCard from "../components/TaskCard";

type Task = {
  _id: string;
  title: string;
  description: string;
};

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"add" | "search">("add");
  const [successMessage, setSuccessMessage] = useState(""); // ✅ popup message

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    try {
      await API.post("/tasks", { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();

      // Show success popup
      setSuccessMessage("Task added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // hide after 3 seconds
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto mt-10 glass p-6 relative">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Task Dashboard
        </h1>

        {/* Success Popup */}
        {successMessage && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-md animate-fade">
            {successMessage}
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setTab("add")}
            className={`px-6 py-2 rounded-full font-semibold ${
              tab === "add"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            ➕ Add Task
          </button>

          <button
            onClick={() => setTab("search")}
            className={`px-6 py-2 rounded-full font-semibold ${
              tab === "search"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            🔍 View & Search Tasks
          </button>
        </div>

        {/* ADD TASK */}
        {tab === "add" && (
          <div className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded"
            />
            <button
              onClick={addTask}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded font-semibold"
            >
              Create Task
            </button>
          </div>
        )}

        {/* SEARCH TASKS */}
        {tab === "search" && (
          <>
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 border rounded mb-6"
            />

            <div className="grid gap-4">
              {filteredTasks.map((task) => (
                <TaskCard key={task._id} task={task} deleteTask={deleteTask} />
              ))}

              {filteredTasks.length === 0 && (
                <p className="text-center text-gray-500">No tasks found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
