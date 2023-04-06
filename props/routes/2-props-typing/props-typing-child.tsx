import React from "react";

export type PropsTypingChildProps = {
    todos: {
        name: string;
        id: number;
    }[],

    children: React.ReactNode;
}

export const PropsTypingChild = (props:PropsTypingChildProps) => {
    return (
        <>
            {props.todos.map(todo => (
                <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.name}</div>
                </div>
            ))}
            {props.children}
        </>
    );
};
