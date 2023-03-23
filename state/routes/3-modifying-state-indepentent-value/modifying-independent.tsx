/* eslint-disable no-magic-numbers */
import { useState } from "react";

export const ModifyingIndependent = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <button type={"button"} onClick={() => {setCount(2);}}>2</button>
            <button type={"button"} onClick={() => {setCount(4);}}>4</button>
            <button type={"button"} onClick={() => {setCount(5);}}>5</button>
            <button type={"button"} onClick={() => {setCount(10);}}>10</button>
            <div>{count}</div>
        </div>
    );

};
