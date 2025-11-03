import React from "react";

export default function FilterBar({ filter, setFilter }) {
  const buttons = [
    { key: "all", label: "All" },
    { key: "completed", label: "Completed" },
    { key: "pending", label: "Pending" },
  ];

  return (
    <div className="flex gap-3 mb-4">
      {buttons.map((b) => (
        <button
          key={b.key}
          onClick={() => setFilter(b.key)}
          className={`px-4 py-1 rounded-lg capitalize ${
            filter === b.key
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
