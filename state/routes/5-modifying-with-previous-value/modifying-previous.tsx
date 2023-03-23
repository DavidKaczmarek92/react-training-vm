import { useState } from "react";

export const ModifyingPrevious = () => {
    const [count, setCount] = useState(1);

    const handleClick = (value: number) => {
        setCount((previousCount) => previousCount + value);
    };

    return (
        <div>
            <button type={"button"} onClick={() => {handleClick(1);}}>+</button>
            <div>{count}</div>
        </div>
    );

};

