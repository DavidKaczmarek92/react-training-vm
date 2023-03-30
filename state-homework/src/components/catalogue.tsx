
import { ProductInTheCart as ProductInTheCartEntity, ProductInTheCatalogue } from "../entites/product-entity";
import { useShop } from "../hooks/use-shop";
import { AddNewProductForm } from "./add-new-product-form";
import { Product } from "./product";
import { ProductInTheCart } from "./product-in-the-cart";

export const Catalogue = () => {
    const { products, total, productsInTheCart, doAddToCart, doRemoveFromCart, doPurchase, doAddNewProduct } = useShop();

    return (
        <>
            <div style={{ marginBottom: 35 }}>
                <h3>Cart</h3>
                <div>Total: {total}</div>
                <div>{productsInTheCart.map((product: ProductInTheCartEntity) => <ProductInTheCart key={product.id} onRemoveFromCart={doRemoveFromCart} {...product} />)}</div>
                <button type="button" style={{
                    backgroundColor: "green",
                    marginTop: 15,
                }} onClick={doPurchase}>Purchase</button>
            </div>
            <h2>ALL PRODUCTS: </h2>
            <div style={{
                display: "flex",
                gap: 32,
                justifyContent: "center",
            }}>{products.map((product: ProductInTheCatalogue) => <Product key={product.id} onAddToCart={doAddToCart} {...product} />)}</div>
            <AddNewProductForm onSubmit={doAddNewProduct}/>
        </>
    );
};
