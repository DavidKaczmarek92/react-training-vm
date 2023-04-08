/* eslint-disable no-console,unused-imports/no-unused-vars */
// noinspection JSUnusedLocalSymbols

import { useRef, useState } from "react";

export const UseRefNonRenderingState = () => {
    const [dummyState, setDummyState] = useState(false);
    const stateRef = useRef<number>(1);

    const incrementRefValue = () => {
        stateRef.current += 1;
        console.log(`New value: ${stateRef.current}`);
    };

    return (
        <div>
            <div><button type={"button"} onClick={incrementRefValue}>Increment value without rerendering component</button></div>
            <br/>
            <h2>{stateRef.current}</h2>
            <br/>
            <hr/>
            <div><button type={"button"} onClick={() => setDummyState(prevState => !prevState)}>Rerender component</button></div>
        </div>
    );
};
