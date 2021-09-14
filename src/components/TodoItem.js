import React from 'react'

export function TodoItem({ todo, toogleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = (e) => {
        // console.log(toogleTodo);
        // console.log(e.target.name);
        toogleTodo(id);
    };
    return (
        <li><input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
        </li >
    );
}
