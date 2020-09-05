import React, { Component } from 'react';
import Todos from "./Todos.js";
import AddTodo from "./AddTodo.js";


class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: "BUY MILK"},
      {id: 2, content: "PLAY GAMES"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
    console.log(id);
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;















































// import React, { Component } from 'react';
// import Todos from "./Todos.js";
// import AddTodo from "./AddTodo.js"; 


// class App extends Component {
//   state = {
//     todos: [
//       {id: 1, content: "Buy juice"},
//       {id: 2, content: "Play mario kart"}

//     ]
//   }
//   // The state with some dummy data

//   deleteTodo = (id) => {
//     const todos = this.state.todos.filter(todo => {
//       return todo.id !== id
//     });
//     this.setState({
//       todos
//     })
//   }
//   addTodo = (todo) => {
//     todo.id = Math.random();
//     let todos = [...this.state.todos, todo];
//     this.setState({
//       todos
//     })
//   }
//   render() {
//     return (
//       <div className="todo-app container">
//         <h1 className="center blue-text">Todo's</h1>
//         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
//         {/* Passing props in the Todos in order to refrence the state we created above */}
//         <AddTodo addTodo={this.addTodo} />  
//       </div>
//     );
//   }
// }

// export default App;






