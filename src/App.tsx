import TaskForm from "./components/TaskForm";
import Column from "./components/Column";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Flow Kanban Board
        </h1>

        <TaskForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column
            title="To Do"
            status="todo"
          />

          <Column
            title="In Progress"
            status="inprogress"
          />

          <Column
            title="Done"
            status="done"
          />
        </div>
      </div>
    </div>
  );
}

export default App;