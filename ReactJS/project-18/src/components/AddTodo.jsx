import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
const AddTodo = () => {
  let [Task, SetTask] = useState("");
  let [Tasks, SetTasks] = useState([]);
  function AddTask() {
    SetTasks([...Tasks, Task]);
    SetTask("");
  }

  useEffect( () => {
    console.log(Tasks);
  },[Tasks])
  return (
    <>
    <div className="flex justify-center gap-2 mt-4">
      <input
        type="text"
        value={Task}
        placeholder="Enter a task..."
        className="w-64 p-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => SetTask(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={AddTask}
      >
        Add
      </button>
    </div>
    <TodoList task={Tasks} />
    </>
  );
};

export default AddTodo;
