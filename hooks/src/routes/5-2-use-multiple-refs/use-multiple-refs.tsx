import React, { ForwardedRef, forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";

type ForwardedMultipleRefs<T> = MutableRefObject<T>[]

export const UseMultipleRefs = () => {
    const inputRef = useRef<ForwardedMultipleRefs<HTMLInputElement | null>>(null);

    const onButtonClick1 = () => {
        inputRef?.current?.[0]?.current?.focus();
    };

    const onButtonClick2 = () => {
        inputRef?.current?.[1]?.current?.focus();
    };

    const onButtonClick3 = () => {
        inputRef?.current?.[2]?.current?.focus();
    };

    const onButtonClick4 = () => {
        inputRef?.current?.[3]?.current?.focus();
    };

    return (
        <div>
            <div><button type={"button"} onClick={onButtonClick1}>Focus on input 1!</button></div>
            <br/>
            <div><button type={"button"} onClick={onButtonClick2}>Focus on input 2!</button></div>
            <br/>
            <div><button type={"button"} onClick={onButtonClick3}>Focus on input 3!</button></div>
            <br/>
            <div><button type={"button"} onClick={onButtonClick4}>Focus on input 4!</button></div>
            <br/>
            <br/>
            <InputWrapper ref={inputRef}/>
        </div>
    );
};

// eslint-disable-next-line react/display-name
const InputWrapper = forwardRef((_, ref:ForwardedRef<ForwardedMultipleRefs<HTMLInputElement | null>>) => {
    const firstRef = useRef<ForwardedMultipleRefs<HTMLInputElement | null>>(null);
    const secondRef = useRef<ForwardedMultipleRefs<HTMLInputElement | null>>(null);

    useImperativeHandle(ref, () => ([...firstRef?.current ?? [], ...secondRef?.current ?? []]));

    return (
        <div>
            This is a wrapper text.
            <br/>
            <br/>
            <CustomInput ref={firstRef}/>
            <br/>
            <CustomInput ref={secondRef}/>
        </div>
    );
});

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((_, forwardedRef:ForwardedRef<ForwardedMultipleRefs<HTMLInputElement | null>>) => {
    const firstRef = useRef<HTMLInputElement | null>(null);
    const secondRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(forwardedRef, () => [
        firstRef,
        secondRef,
    ]);

    return(
        <div>
            <div>This is a two input component</div>
            <br/>
            <label>This is input label</label>
            <div><input ref={firstRef} type={"text"}/></div>
            <br/>
            <label>This is input label</label>
            <div><input ref={secondRef} type={"text"}/></div>
        </div>
    );
});
