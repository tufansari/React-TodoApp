import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // main state for input
  // if we made it edit, input doesnt has to be empty so useState() has to be like below.
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

 // tab focus
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus();
  })
 //handle for changes
  const handleChange = (e) => {
    setInput(e.target.value);
  };

//handle for submits
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput("");
  };
  // my input
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? ( 
        <>
        <input
        type="text"
        placeholder="Update your item"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}/>
      <button className="todo-button edit">Update</button>
      </>
      ) : 
      (
        <>
        <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      ></input>
      <button className="todo-button">Add todo</button>
      </>
      )
      }

    </form>
  );
}

export default TodoForm;
