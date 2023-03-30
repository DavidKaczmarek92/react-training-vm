import { useCallback, useReducer } from "react";

import { ProductInTheCart, ProductInTheCatalogue } from "../entites/product-entity";

enum ShopActionType {
    ADD_TO_CART = "ADD_TO_CART",
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    PURCHASE = "PURCHASE"
}

type ShopAction = {
    type: ShopActionType,
    payload?: any
}

type ShopState = {
    cart: {
        total: number,
        products: string[]
    },
    products: {
        byId: {[id: string]: ProductInTheCatalogue}
        allIds: string[]
    }
}

const productsSample: {[id: string]: ProductInTheCatalogue}= {
    "1": {
        name: "Product 1",
        amount: 10,
        id: "1",
        price: 10,
    },
    "2": {
        name: "Product 2",
        amount: 10,
        id: "2",
        price: 10,
    },
    "3": {
        name: "Product 3",
        amount: 12,
        id: "3",
        price: 10,
    },
    "4": {
        name: "Product 4",
        amount: 10,
        id: "4",
        price: 15,
    },
};

const initialState: ShopState = {
    cart: {
        total: 0,
        products: [],
    },
    products: {
        byId: productsSample,
        allIds: Object.keys(productsSample),
    },
};

// SELECTORS

function selectProductById(state: ShopState, id :string): ProductInTheCatalogue {
    return state.products.byId[id];
}

function selectAllProducts(state: ShopState) {
    return state.products.allIds.map(id => state.products.byId[id]);
}

function selectAllProductsInTheCart(state: ShopState): ProductInTheCart[] {
    const products: ProductInTheCart[] = [];

    state.cart.products.forEach(id => {
        const index = products.findIndex((product: ProductInTheCart) => product.id === id);

        if(index === -1) {
            const { id: productId, name, price } = selectProductById(state, id);
            products.push({
                name,
                id: productId,
                price,
                quantity: 1,
            });
        } else {
            const product = products[index];

            product.quantity += 1;
        }
    });

    return products;
}

function selectCartTotal(state: ShopState): number {
    return state.cart.total;
}

const shopReducer = (currentState: ShopState, action:
    ShopAction) => {
    switch (action.type) {
        case ShopActionType.ADD_TO_CART: {
            if(action.payload) {
                const { id } = action.payload;
                const { amount } = selectProductById(currentState, id);

                if(amount) {
                    const productsInTheCart = [...currentState.cart.products, id];
                    const total = productsInTheCart.reduce((sum, id) => sum + selectProductById(currentState, id).price, 0);

                    return {
                        ...currentState,
                        products: {
                            byId: {
                                ...currentState.products.byId,
                                [id]: {
                                    ...currentState.products.byId[id],
                                    amount: amount - 1,
                                },
                            },
                            allIds: currentState.products.allIds,
                        },
                        cart: {
                            total,
                            products: productsInTheCart,
                        },
                    };
                }
            }

            return currentState;
        }
        case ShopActionType.REMOVE_FROM_CART: {
            if(action.payload) {
                const { id } = action.payload;

                const { products, total } = currentState.cart;
                const lastIndex = products.lastIndexOf(id);
                const { price } = selectProductById(currentState, id);

                const copyProducts = [...products];
                copyProducts.splice(lastIndex, 1);

                return {
                    ...currentState,
                    products: {
                        ...currentState.products,
                        byId: {
                            ...currentState.products.byId,
                            [id]: {
                                ...currentState.products.byId[id],
                                amount: currentState.products.byId[id].amount + 1,
                            },
                        },

                    },
                    cart: {
                        total: total - price,
                        products: copyProducts,
                    },
                };
            }

            return currentState;
        }
        case ShopActionType.PURCHASE:
            return {
                ...currentState,
                cart: {
                    total: 0,
                    products: [],
                },
            };
        case ShopActionType.ADD_NEW_PRODUCT: {
            if(action.payload) {
                const { id, name, amount, price } = action.payload.product;

                return {
                    ...currentState,
                    products: {
                        byId: {
                            ...currentState.products.byId,
                            [id]: {
                                id,
                                name,
                                amount,
                                price,
                            },
                        },
                        allIds: [...currentState.products.allIds, id],
                    },
                };
            }

            return currentState;
        }
        default:
            return currentState;
    }
};

export function useShop() {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    return {
        state,
        products: selectAllProducts(state),
        productsInTheCart: selectAllProductsInTheCart(state),
        total: selectCartTotal(state),
        doAddToCart: (id: string) => dispatch({
            type: ShopActionType.ADD_TO_CART,
            payload: { id },
        }),
        doRemoveFromCart: (id: string) => dispatch({
            type: ShopActionType.REMOVE_FROM_CART,
            payload: { id },
        }),
        doPurchase: useCallback(
            () => dispatch({ type: ShopActionType.PURCHASE }),
            [dispatch]),
        doAddNewProduct: (product: ProductInTheCatalogue) => dispatch({
            type: ShopActionType.ADD_NEW_PRODUCT,
            payload: { product },
        }),
    };
}