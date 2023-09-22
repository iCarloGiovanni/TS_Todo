import { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import { Todo } from "./todo.models";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
