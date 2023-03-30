export interface ProductEntity {
    name: string,
    id: string,
    price: number,
}

export interface ProductInTheCatalogue extends ProductEntity {
    amount: number
}

export interface ProductInTheCart extends ProductEntity{
    quantity: number
}