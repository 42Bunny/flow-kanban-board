import type {
  Task,
  ColumnType,
} from "../types/index";
import { useBoard } from "../context/BoardContext";

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const { dispatch } = useBoard();

  const moveTask = (
    status: ColumnType
  ) => {
    dispatch({
      type: "MOVE_TASK",
      payload: {
        id: task.id,
        status,
      },
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">
        {task.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {task.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {task.status !== "todo" && (
          <button
            onClick={() =>
              moveTask(
                task.status === "done"
                  ? "inprogress"
                  : "todo"
              )
            }
            className="bg-gray-200 px-3 py-1 rounded-lg"
          >
            ← Move
          </button>
        )}

        {task.status !== "done" && (
          <button
            onClick={() =>
              moveTask(
                task.status === "todo"
                  ? "inprogress"
                  : "done"
              )
            }
            className="bg-green-500 text-white px-3 py-1 rounded-lg"
          >
            Move →
          </button>
        )}

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;