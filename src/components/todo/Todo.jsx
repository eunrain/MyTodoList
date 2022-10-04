import React from "react";
import "./style.css";

function Todo({ todo, handlerRemove, handlerClear}) {

    return (
        <div className="todo">
            <h2 className="todo-title">{todo.title}</h2>
            <div>{todo.body}</div>
            <div className="todo-button">
                <button className="todo-del" onClick={() => handlerRemove(todo.id)}>삭제하기</button>
                <button className="todo-cle" onClick={() => handlerClear(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                </button>
            </div>
        </div>
    )
};


export default Todo;