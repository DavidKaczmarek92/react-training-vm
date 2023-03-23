import { ChangeEvent, useState } from "react";

type FormType = {
    firstName: string,
    lastName: string,
    position: string;
    number: number
}

export const ObjectAsState = () => {
    const [inputs, setInputs] = useState<FormType>({
        firstName: "",
        lastName: "",
        position: "",
        number: 0,
    });

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            firstName: event.target.value,
        });
    };

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            lastName: event.target.value,
        });
    };

    const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            position: event.target.value,
        });
    };

    const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            number: parseInt(event.target.value, 10),
        });
    };

    return (
        <div>
            <div>firstName <input name={"firstName"} value={inputs.firstName} onChange={(e) => handleFirstNameChange(e)}/></div>
            <div>lastName <input name={"lastName"} value={inputs.lastName} onChange={(e) => handleLastNameChange(e)}/></div>
            <div>position <input name={"position"} value={inputs.position} onChange={(e) => handlePositionChange(e)}/></div>
            <div>number <input name={"number"} type={"number"} value={inputs.number} onChange={(e) => handleNumberChange(e)}/></div>
        </div>
    );
};
