import { ChangeEvent, FormEvent, useState } from "react";

import { ProductInTheCatalogueEntity } from "../entites/product-entity";

type FormType = {
    name: string,
    amount: string,
    price: string
}

type FromProps = {
    onSubmit: (data: ProductInTheCatalogueEntity) => void
}

const InitialState = {
    name: "",
    amount: "",
    price: "",
};

export const AddNewProductForm = ({ onSubmit }: FromProps) => {
    const [inputs, setInputs] = useState<FormType>(InitialState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        onSubmit({
            name: inputs.name,
            amount: parseInt(inputs.amount, 10),
            price: parseInt(inputs.price, 10),
            id: Math.random().toString(),
        });

        setInputs({ ...InitialState });
    };

    const handleReset = () => {
        setInputs({ ...InitialState });
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            name: e.target.value,
        });
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            amount: e.target.value,
        });
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            price: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} style={{ marginTop: 30 }}>
            <div>
                <label>Product name:</label>
                <input name="name" value={inputs.name} onChange={handleNameChange}/>
            </div>
            <div>
                <label>Amount: </label>
                <input min={0} type="number" name="amount" value={inputs.amount} onChange={handleAmountChange}/>
            </div>
            <div>
                <label>Price: </label>
                <input min={0} type="number" name="price" value={inputs.price} onChange={handlePriceChange}/>
            </div>
            <input style={{ marginTop: 20 }} disabled={inputs.price === "" || inputs.amount === "" || !inputs.name} type="submit" value="Add new product" />
            <input type="reset" value="Reset Form"/>
        </form>
    );
};