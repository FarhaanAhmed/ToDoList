import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span>{todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}}>REMOVE</button>
                </div>
            )
        })
        
    ) : (
        <p>NO TODOS</p>
    )
return (
    <div>
        {todoList}
    </div>
)
}

export default Todos;

































// import React from "react";

// const Todos = ({ todos, deleteTodo }) => {
//     const todoList = todos.length ? (
//         todos.map(todo => {
//             return (
//                 <div key={todo.id}>
//                     <span>
//                         {todo.content}
//                         <button onClick={() => {deleteTodo(todo.id)}}>Remove</button>
//                     </span>
//                 </div>
//             )
//         })
//     ) : (
//         <p className="center">You have no todo's left.</p>
//     )
//     return (
//         <div className="todos collection">
//             {todoList}
//         </div>
//     )
// }

// export default Todos;
