import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

	addTodo = todo => {
		this.setState(prevState => ({
			todos: [...prevState.todos, todo],
		}));
	};

	deleteTodo = value => {
		this.setState(prevState => ({
			todos: prevState.todos.filter(todo => todo !== value),
		}));
	};

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;