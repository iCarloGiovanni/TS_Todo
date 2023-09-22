import React, { useRef } from "react";

import './NewTodo.css'

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewToDo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current!.value !== ''){
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };
   
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">What are you doing next?</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TASK</button>
    </form>
  );
};

export default NewToDo;
