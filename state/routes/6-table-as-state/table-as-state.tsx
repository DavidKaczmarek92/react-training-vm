/* eslint-disable no-magic-numbers */
import { useState } from "react";

type ToDo = {
    id: number;
    name: string;
    completed: boolean;
}

type ToDoList = ToDo[];

export const TableAsState = () => {
    const [todos, setTodos] = useState<ToDoList>([{
        id: 1,
        name: "test",
        completed: false,
    }]);

    const handleAdd = () => {
        setTodos(previousTodos => [{
            id: Math.random(),
            name: `New Todo ${ Math.random()}`,
            completed: Math.random() <= 0.5,
        }, ...previousTodos]);
    };

    const handleInsert = (at: number) => {
        const newTodo = {
            id: Math.random(),
            name: `Inserted at ${at}`,
            completed: Math.random() <= 0.5,
        };

        setTodos(previousTodos => {
            if (at < 1) return [newTodo, ...previousTodos];
            if (at >= previousTodos.length) return [...previousTodos, newTodo];

            const firstSlice = previousTodos.slice(0, at);
            const secondSlice = previousTodos.slice(at);

            return [...firstSlice, newTodo, ...secondSlice];
        });
    };

    const handleInsertWithSlice = (at: number) => {
        const newTodo = {
            id: Math.random(),
            name: `Inserted at ${at}`,
            completed: Math.random() <= 0.5,
        };

        setTodos(previousTodos => {
            const newTodos = [...previousTodos];
            newTodos.splice(at, 0, newTodo);
            return newTodos;
        });
    };

    const handleDelete = (id: number) => {
        setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id));
    };

    const toggleCheckbox = (id: number) => {
        setTodos(previousTodos => previousTodos.map(todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed,
        } : todo));
    };

    return (
        <div>
            <button type={"button"} onClick={handleAdd}>AddTodo</button>
            <button type={"button"} onClick={() => handleInsert(1)}>AddAt3</button>
            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <div>ID: {todo.id}</div>
                        <div>Name: {todo.name}</div>
                        <div>Status: <input type={"checkbox"} checked={todo.completed} onClick={() => toggleCheckbox(todo.id)} /></div>
                        <button type={"button"} onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
