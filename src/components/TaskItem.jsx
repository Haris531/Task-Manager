import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg shadow-sm border ${
        task.completed ? "bg-green-50" : "bg-white"
      }`}
    >
      <div
        onClick={() => onToggle(task.id)}
        className={`flex-1 cursor-pointer select-none ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.text}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(task.id)}
          aria-label={task.completed ? "Mark as pending" : "Mark as completed"}
          className="px-2 py-1 rounded-md hover:bg-gray-100"
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 p-1 rounded-md"
          aria-label="Delete task"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
