import { useEffect, useState } from "react";

export const UseEffectHook = () => {
    const [personIndex, setPersonIndex] = useState(1);

    const [personData, setPersonData] = useState<any>(null);

    useEffect(() => {
        fetchAndSetPersonData(personIndex);
    }, []);

    const onInput = (event: {target: any}) => {
        const value = parseInt((event.target as HTMLInputElement).value, 10);
        setPersonIndex(value);
        fetchAndSetPersonData(value);
    };

    const fetchAndSetPersonData = (value: number) => {
        const data = fetch(`https://swapi.dev/api/people/${value}`);
        data.then(result => result.json()).then(text => setPersonData(text));
    };

    return (
        <>
            <div>
                Current person index: <input type={"number"} value={personIndex} onInput={onInput} min={1} max={10}/>
            </div>
            <div>
                {JSON.stringify(personData)}
            </div>
        </>
    );
};
