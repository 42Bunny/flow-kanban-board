import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import type { ReactNode } from "react";

import {
  boardReducer,
  initialState,
} from "../reducer/boardReducer";

const BoardContext = createContext<any>(null);

export const BoardProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const savedTasks = localStorage.getItem("tasks");

  const parsedState = savedTasks
    ? { tasks: JSON.parse(savedTasks) }
    : initialState;

  const [state, dispatch] = useReducer(
    boardReducer,
    parsedState
  );

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(state.tasks)
    );
  }, [state.tasks]);

  return (
    <BoardContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);