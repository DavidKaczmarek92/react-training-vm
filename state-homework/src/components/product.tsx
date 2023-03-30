import { ProductInTheCatalogue } from "../entites/product-entity";

interface ProductProps extends ProductInTheCatalogue {
    onAddToCart ?: (id: string) => void,
}

export const Product = ({ amount, id, name, price, onAddToCart }: ProductProps) => {
    const handleAddToCart = () => {
        if(onAddToCart) {
            onAddToCart(id);
        }
    };

    return (
        <div style={{ marginBottom: 10 }}>
            <div>Name: {name}</div>
            <div>Amount: {amount}</div>
            <div>Price: ${price}</div>
            <button type="button" disabled={amount === 0} onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

Product.defaultProps = { onAddToCart: null };