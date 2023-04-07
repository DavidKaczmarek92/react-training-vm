import React, { ReactNode, useState } from "react";

export const GivingProps = () => {
    const [value, setValue] = useState(0);

    const handleValueIncrement = (newValue: number) => {
        setValue(newValue);
    };

    const tailorMadeProps = {
        value: value,
        onClick: handleValueIncrement,
        children: (<span>A predefined span</span>),
    };

    return (
        <>
            <ChildComponent value={value} onClick={handleValueIncrement}>
                <span>A child span</span>
            </ChildComponent>

            <ChildComponent {...tailorMadeProps} value={value + 4}>
                <span>A second span</span>
            </ChildComponent>

            <ChildComponent {...tailorMadeProps}/>
        </>
    );
};

type ChildComponentProps = {
    children?: ReactNode
    value?: number
    onClick?: (newValue: number) => void
}
const ChildComponent = (props: ChildComponentProps) => {
    return (
        <>
            <button type={"button"} onClick={() => props.onClick?.((props.value ?? 1) + 2)}>Click me!</button>
            <div>Current value of this</div>
            <div>{props.value}</div>
            {props.children}
            <hr/>
        </>
    );
};

ChildComponent.defaultProps = {
    value: 4,
    children: undefined,
    onClick: () => null,
};
