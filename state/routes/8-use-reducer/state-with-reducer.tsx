import { useReducer } from "react";

import { countAction, countReducer } from "./8-reducer";

export const StateWithReducerOLD = () => {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <div>
            <button type={"button"} onClick={() => {dispatch(countAction.INCREMENT);}}>+</button>
            <div>{count}</div>
            <button type={"button"} onClick={() => {dispatch(countAction.DECREMENT);}}>-</button>

        </div>
    );
};

type FormType = {
    firstName: string,
    lastName: string,
    position: string;
    number: number
}

type FormAction = {
    type: "firstNameChange"
    value: string
} | {
    type: "lastNameChange"
    value: string
} | {
    type: "positionChange"
    value: string
} | {
    type: "numberChange"
    value: number
};

const formReducer = (currentState: FormType, action: FormAction) => {
    switch (action.type) {
        case "firstNameChange":
            return {
                ...currentState,
                firstName: action.value,
            };
        case "lastNameChange":
            return {
                ...currentState,
                lastName: action.value,
            };
        case "numberChange":
            return {
                ...currentState,
                number: action.value,
            };
        case "positionChange":
            return {
                ...currentState,
                position: action.value,
            };
    }
};

export const StateWithReducer = () => {
    const [inputs, dispatch] = useReducer(formReducer, {
        firstName: "",
        lastName: "",
        position: "",
        number: 0,
    });

    return (
        <div>
            <div>firstName <input name={"firstName"} value={inputs.firstName} onChange={(e) => dispatch({
                type: "firstNameChange",
                value: e.target.value,
            })}/></div>
            <div>lastName <input name={"lastName"} value={inputs.lastName} onChange={(e) => dispatch({
                type: "lastNameChange",
                value: e.target.value,
            })}/></div>
            <div>position <input name={"position"} value={inputs.position} onChange={(e) => dispatch({
                type: "positionChange",
                value: e.target.value,
            })}/></div>
            <div>number <input name={"number"} type={"number"} value={inputs.number} onChange={(e) => dispatch({
                type: "numberChange",
                value: parseInt(e.target.value, 10),
            })}/></div>
        </div>
    );
};
