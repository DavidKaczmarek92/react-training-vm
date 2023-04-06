import { PropsTypingChild } from "./props-typing-child";

export const PropsTyping = () => {
    const todoProps = [{
        id: 2,
        name: "todo2",
    }];

    return (
        <div>
            <PropsTypingChild todos={todoProps}>
                <span>This is inside of a child component</span>
                <div>dassad</div>
            </PropsTypingChild>
        </div>
    );
};
