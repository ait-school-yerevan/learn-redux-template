import { useState } from "react";

const initialTasks = [
  {
    id: Math.random(),
    text: "Learn Redux",
    completed: false
  },
  {
    id: Math.random(),
    text: "Learn Redux/toolkit",
    completed: false
  }
];

function App() {
  const [newTask, setNewTask] = useState("");

  // handle add task
  // toggle tasks
  // handle remove task

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Todo App</h1>
      <div className="mb-4">
        <form className="w-full flex">
          <input
            type="text"
            className="border flex-auto p-2"
            placeholder="Add a new task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button type="submit" className="ml-2 flex-auto bg-blue-500 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </form>
      </div>
      <ul>
        {initialTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between border p-2 mb-2">
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <div className="flex space-x-2">
              <button className="text-blue-500">{task.completed ? "Mark Incomplete" : "Mark Complete"}</button>
              <button className="text-red-500">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
