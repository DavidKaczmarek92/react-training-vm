import React, { useState } from "react";

export const UsingProps = () => {
    const [value, setValue] = useState(0);

    const handleValueIncrement = () => {
        setValue(prevState => prevState + 1);
    };

    const propsForAGrandChild: GrandChildComponentProps = {
        stringOne: "first",
        stringTwo: "second",
    };

    return (
        <>
            <ChildComponent value={value} onClick={handleValueIncrement} {...propsForAGrandChild}/>
        </>
    );
};

type ChildComponentProps = {
    value?: number
    onClick?: () => void
} & GrandChildComponentProps
const ChildComponent = ({ value, onClick, ...restProps }: ChildComponentProps) => {
    return (
        <>
            <button type={"button"} onClick={onClick}>Click me!</button>
            <div>Current value of this</div>
            <div>{value}</div>
            <GrandChildComponent {...restProps}/>
            <hr/>
        </>
    );
};

ChildComponent.defaultProps = {
    value: 4,
    onClick: () => null,
};

type GrandChildComponentProps = {
    stringOne: string,
    stringTwo: string,
}
const GrandChildComponent = ({ stringOne, stringTwo }: GrandChildComponentProps) => {
    return (
        <>
            <div>{stringOne}</div>
            <div>{stringTwo}</div>
        </>
    );
};
