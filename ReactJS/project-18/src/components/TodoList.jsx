import React from 'react'
const TodoList = ({tasks}) => {
  return (
     <div className="mt-4 text-center">
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((t, index) => (
          <p key={index}>Task {index + 1}: {t}</p>
        ))
      )}
    </div>
  )
}

export default TodoList
