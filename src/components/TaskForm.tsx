import { useState } from "react";
import { useBoard } from "../context/BoardContext";

function TaskForm() {
  const { dispatch } = useBoard();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: crypto.randomUUID(),
        title,
        description,
        status: "todo",
      },
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-3"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-3"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;