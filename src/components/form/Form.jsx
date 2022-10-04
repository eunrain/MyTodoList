import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./style.css";

function Form({ todos, setTodos }) {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const handlerAddTodo = () => {
        if(title.length < 1 || body.length < 1) return;
        setTodos([...todos, {
            id: todos.length + 1,
            title: title,
            body: body,
            isDone: false,
        }]);
        setTitle("");
        setBody("");
    };

    const onChangeTitle = (event) => {
        const inputValue = event.target.value;
        setTitle(inputValue);
    };

    const onChangeBody = (event) => {
        const inputValue = event.target.value;
        setBody(inputValue);
    };

    return (
        <div className="form">
            <div className="form-group">
                <div className="font">제목</div>
                <input type="text" className="input" onChange={onChangeTitle} value={title}></input>
                <div className="font">내용</div>
                <input type="text" className="input" onChange={onChangeBody} value={body}></input>
            </div>
            <button className="butt" onClick={handlerAddTodo}>추가하기</button>

        </div>
    );
};

export default Form;