import { useCallback, useMemo, useState } from "react";

export const UseCallbackHook = () => {
    const [int, setInt] = useState(1);
    const [secondInt, setSecondInt] = useState(1);

    const random = Math.random();

    const printToConsole = useCallback(() => {
        console.log("int", int, random / int);
    }, [int]);

    const printToConsole2 = useMemo(() => () => {
        console.log("secondInt", secondInt, random / secondInt);
    }, [secondInt]);

    printToConsole();
    printToConsole2();

    return (
        <>
            <input type={"number"} value={int} onChange={(e) => setInt(parseInt(e.target.value, 10))}/>
            <input type={"number"} value={secondInt} onChange={(e) => setSecondInt(parseInt(e.target.value, 10))}/>
        </>
    );
};
