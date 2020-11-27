import React from "react";

const Todo = props => (
  <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);


const TodoList = props => {
	
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <Todo
          todo={todo}
          key={i}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;