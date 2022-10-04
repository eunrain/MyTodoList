import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {

    const handlerRemove = (id) => {
        setTodos(todos.filter((todo) =>
            todo.id !== id));
    };

    const handlerClear = (id) => {
        setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ))
    };


    return (
        <div className="list">
            <h2>Working..🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => (
                    !todo.isDone &&
                    <Todo
                        todo={todo}
                        key={todo.id}
                        setTodos={setTodos}
                        handlerRemove={handlerRemove}
                        handlerClear={handlerClear}
                        
                        />
                ))}

            </div>

            <h2>Done..!🎉</h2>
            <div className="list-wrapper">
                {todos.map((todo) => (
                    todo.isDone &&
                    <Todo
                        todo={todo}
                        key={todo.id}
                        setTodos={setTodos}
                        handlerRemove={handlerRemove}
                        handlerClear={handlerClear}
                        
                         />
                ))}
            </div>

        </div>

    );
};

export default List;