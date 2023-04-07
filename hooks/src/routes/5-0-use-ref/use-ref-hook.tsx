import React, { ForwardedRef, forwardRef, useRef } from "react";

export const UseRefHook = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onButtonClick = () => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    };

    return (
        <div>
            <button type={"button"} onClick={onButtonClick}>Focus on input!</button>
            <InputWrapper ref={inputRef}/>
        </div>
    );
};

// eslint-disable-next-line react/display-name
const InputWrapper = forwardRef((props, ref:ForwardedRef<HTMLInputElement | null>) => {
    return (
        <div>
            This is  a text.
            <CustomInput ref={ref}/>
        </div>
    );
});

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props, forwardedRef:ForwardedRef<HTMLInputElement | null>) => {
    return(
        <div>
            <label>ABC!</label>
            <input ref={forwardedRef} type={"text"}/>
            <input ref={forwardedRef} type={"text"}/>
        </div>
    );
});
