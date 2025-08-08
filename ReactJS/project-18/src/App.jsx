import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="text-2xl font-bold text-center text-white bg-blue-500 p-4 rounded-lg shadow-lg">
        Todo List
      </div>
      <AddTodo />
    </>
  );
}

export default App;
