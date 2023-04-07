/* eslint-disable react/no-array-index-key */
import { useDeferredValue, useMemo, useState } from "react";

export const UseDeferredValueHook = () => {
    const [personIndex, setPersonIndex] = useState(1);

    const deferredPersonIndex = useDeferredValue(personIndex);

    const arr2 = useMemo(() => {
        return new Array(0).fill(deferredPersonIndex).map((el, index) => <div key={index}>{el}</div>);
    }, [deferredPersonIndex]);

    return (
        <>
            <div>
                <div>Set current index to 1: <button type={"button"} onClick={() => setPersonIndex(1) }>1</button></div>
                <div>Set current index to 2: <button type={"button"} onClick={() => setPersonIndex(2) }>2</button></div>
                <div>Set current index to 3: <button type={"button"} onClick={() => setPersonIndex(3) }>3</button></div>
                <div>Set current index to 4: <button type={"button"} onClick={() => setPersonIndex(4) }>4</button></div>
            </div>
            {arr2}
        </>
    );
};
