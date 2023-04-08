import { useId, useState } from "react";

export const UseIdHook = () => {
    return (
        <div>
            <LabeledInput/>
            <LabeledInput/>
            <LabeledInput/>
            <LabeledInput/>
            <LabeledInput/>
        </div>
    );
};

const LabeledInput = () => {
    const [inputState, setInputState] = useState("");

    const uniqueId = useId();

    return (
        <div>
            <label htmlFor={uniqueId}>Label for abc</label>
            <input id={uniqueId} value={inputState} onInput={event => setInputState((event.target as HTMLInputElement).value)}/>
        </div>
    );
};
