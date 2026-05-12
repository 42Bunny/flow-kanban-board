import type {
  ColumnType,
} from "../types/index";
import { useBoard } from "../context/BoardContext";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  status: ColumnType;
}

function Column({
  title,
  status,
}: Props) {
  const { state } = useBoard();

  const filteredTasks =
    state.tasks.filter(
      (task: any) =>
        task.status === status
    );

  return (
    <div className="bg-gray-100 rounded-2xl p-4 min-h-[500px]">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">
          No tasks in this column
        </p>
      ) : (
        filteredTasks.map((task: any) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}
    </div>
  );
}

export default Column;