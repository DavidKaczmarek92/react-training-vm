/* eslint-disable react/no-array-index-key,unused-imports/no-unused-vars */
// noinspection JSUnusedLocalSymbols

import { useMemo, useState } from "react";

export const UseMemoHook = () => {
    const [personIndex, setPersonIndex] = useState(1);
    const [dummyState, setDummyState] = useState(1);

    const arr2 = useMemo(() => {
        return new Array(0).fill(personIndex).map((el, index) => <div key={index}>{el}</div>);
    }, [personIndex]);

    return (
        <>
            <div>
                Set current index to 1: <button type={"button"} onClick={() => setPersonIndex(1) }>1</button>
                Set current index to 1: <button type={"button"} onClick={() => setPersonIndex(2) }>2</button>
                Set current index to 1: <button type={"button"} onClick={() => setPersonIndex(3) }>3</button>
                Set current index to 1: <button type={"button"} onClick={() => setPersonIndex(4) }>4</button>

                Set dummy index to 1: <button type={"button"} onClick={() => setDummyState(1) }>1</button>
                Set dummy index to 1: <button type={"button"} onClick={() => setDummyState(2) }>2</button>
            </div>
            {arr2}
        </>
    );
};
