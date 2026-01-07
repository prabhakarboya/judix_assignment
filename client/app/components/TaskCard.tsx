// app/components/TaskCard.tsx
"use client";

type Task = {
  _id: string;
  title: string;
  description: string;
};

type Props = {
  task: Task;
  deleteTask: (id: string) => void;
};

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <button
        onClick={() => deleteTask(task._id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}
