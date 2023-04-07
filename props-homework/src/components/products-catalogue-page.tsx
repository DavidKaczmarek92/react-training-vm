
import { useShop } from "../hooks/use-shop";
import { AddNewProductForm } from "./add-new-product-form";
import { Cart } from "./cart";
import { ProductsCatalogue } from "./products-catalogue";

export const ProductsCataloguePage = () => {
    const { products, total, productsInTheCart, doAddToCart, doRemoveFromCart, doPurchase, doAddNewProduct } = useShop();

    return (
        <>
            <Cart productsInTheCart={productsInTheCart} doRemoveFromCart={doRemoveFromCart} doPurchase={doPurchase} total={total} />
            <ProductsCatalogue products={products} doAddToCart={doAddToCart} />
            <AddNewProductForm onSubmit={doAddNewProduct}/>
        </>
    );
};
