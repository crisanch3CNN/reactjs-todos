import React, { Fragmet, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false },
    ])
    return (
        <>
            <TodoList todos={todos} />
            <input type="text" placeholder="Nueva Tarea" />
            <button>add</button>
            <button>delete</button>
        </>

    );
}

