import { useState } from "react";

export const BasicState = () => {
    const [count, setCount] = useState(1);

    const countState = useState(1);

    return (
        <div>
            <StatelessChild state={countState}/>
            <StatelessChild state={countState}/>
            <StatelessChild state={countState}/>
        </div>
    );
};

const StatelessChild = (props: {state: [any, any]}) => {
    const [count, setCount] = props.state;

    return (
        <div>
            <button type={"button"} onClick={() => {setCount(count + 1);}}>+</button>
            <div>{count}</div>
            <button type={"button"} onClick={() => {setCount(count - 1);}}>-</button>
        </div>
    );
};