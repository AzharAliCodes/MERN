import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <div className="mt-4 text-center space-y-2 flex flex-col justify-center items-center">
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet.</p>
      ) : (
        tasks.map((t, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-md w-96"
          >
            <input
              type="checkbox"
              className="w-5 h-5 accent-purple-700"
              onChange={(e) =>
                e.target.nextSibling.classList.toggle("line-through")
              }
            />
            <p className="text-white">{`${t}`}</p>
            <button
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={(e) => {
                let rem = e.target.previousSibling.innerText;
                e.target.parentNode.remove()
                let newarr = tasks.filter(task => task !== rem)
                localStorage.setItem('MyArray', JSON.stringify(newarr))
                }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
