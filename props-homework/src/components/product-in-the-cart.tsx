type ProductProps = {
    id: string,
    name: string,
    price: number,
    onRemoveFromCart ?: (id: string) => void,
    quantity: number
}

export const ProductInTheCart = ({ quantity, id, name, price, onRemoveFromCart }: ProductProps) => {
    const handleOnRemoveFromCart = () => {
        if(onRemoveFromCart) {
            onRemoveFromCart(id);
        }
    };

    return (
        <div style={{ marginBottom: 10 }}>
            <div>Name: {name}</div>
            <div>Quantity: {quantity}</div>
            <div>Price: ${price}</div>
            <button type="button" onClick={handleOnRemoveFromCart}>Remove from cart</button>
        </div>
    );
};

ProductInTheCart.defaultProps = { onRemoveFromCart: null };