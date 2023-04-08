import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

export const UseImperativeHandleHook = () => {
    const inputRef = useRef<{focus: () => void, value: string}>(null);

    const onButtonClick = () => {
        if (!inputRef.current) return;
        inputRef.current.focus();

        console.log(inputRef.current.value);
    };

    return (
        <div>
            <button type={"button"} onClick={onButtonClick}>Focus on input!</button>
            <CustomInput ref={inputRef}/>
        </div>
    );
};

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props, forwardedRef:ForwardedRef<{focus: () => void, value: string}>) => {
    const ref = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(forwardedRef, () => {
        return {
            focus: () => {ref.current?.focus();},
            value: ref.current?.value ?? "",
        };
    });

    return(
        <div>
            <label>ABC!</label>
            <input ref={ref} type={"text"}/>
        </div>
    );
});
