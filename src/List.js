import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import "./List.css";

const List = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const task = inputValue.trim();
    if (task) {
      dispatch(addTodo(task));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="listContainer">
      <div className="addForm">
        <input type="text" className="addInput" placeholder="Enter task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button type="button" className="addButton" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul className="todoList">
        {todos.map((todo, index) => (
          <li key={index} className="todoItem">
            <span>{todo}</span>
            <button className="deleteButton" onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
