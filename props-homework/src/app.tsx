import "./app.pcss";

import { AddNewProductForm } from "./components/add-new-product-form";
import { Cart } from "./components/cart";
import { ProductsCatalogue } from "./components/products-catalogue";
import { useShop } from "./hooks/use-shop";

function App() {
    const { products, total, productsInTheCart, doAddToCart, doRemoveFromCart, doPurchase, doAddNewProduct } = useShop();

    return (
        <div className="App">
            <Cart productsInTheCart={productsInTheCart} doRemoveFromCart={doRemoveFromCart} doPurchase={doPurchase} total={total} />
            <ProductsCatalogue products={products} doAddToCart={doAddToCart} />
            <AddNewProductForm onSubmit={doAddNewProduct}/>
        </div>
    );
}

export default App;
