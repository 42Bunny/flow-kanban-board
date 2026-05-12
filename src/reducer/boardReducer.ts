import type {
  Task,
  ColumnType,
} from "../types/index";

interface State {
  tasks: Task[];
}

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | {
      type: "MOVE_TASK";
      payload: {
        id: string;
        status: ColumnType;
      };
    };

export const initialState: State = {
  tasks: [],
};

export const boardReducer = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "MOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      };

    default:
      return state;
  }
};