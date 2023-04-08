import { ProductInTheCatalogueEntity } from "../entites/product-entity";
import { Product } from "./product";

export type ProductsCatalogueProps = {
    products: ProductInTheCatalogueEntity[],
    doAddToCart: (id: string) => void
}

export const ProductsCatalogue = ({ products, doAddToCart }: ProductsCatalogueProps) => {
    return (
        <>
            <h2>ALL PRODUCTS: </h2>
            <div style={{
                display: "flex",
                gap: 32,
                justifyContent: "center",
            }}>{products.map((product: ProductInTheCatalogueEntity) => <Product key={product.id} onAddToCart={doAddToCart} {...product} />)}</div>
        </>
    );
};