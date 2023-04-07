import { ProductInTheCartEntity } from "../entites/product-entity";
import { ProductInTheCart } from "./product-in-the-cart";

type CartProps = {
    productsInTheCart: ProductInTheCartEntity[],
    doPurchase: () => void,
    doRemoveFromCart: (id: string) => void,
    total: number
}

export const Cart = ({ productsInTheCart, doPurchase, doRemoveFromCart, total }: CartProps) => {

    return (
        <div style={{ marginBottom: 35 }}>
            <h3>Cart</h3>
            <div>Total: {total}</div>
            <div>{productsInTheCart.map((product: ProductInTheCartEntity) => <ProductInTheCart key={product.id} onRemoveFromCart={doRemoveFromCart} {...product} />)}</div>
            <button type="button" style={{
                backgroundColor: "green",
                marginTop: 15,
            }} onClick={doPurchase}>Purchase</button>
        </div>
    );
};