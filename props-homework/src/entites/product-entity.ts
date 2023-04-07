export interface ProductEntity {
    name: string,
    id: string,
    price: number,
}

export interface ProductInTheCatalogueEntity extends ProductEntity {
    amount: number
}

export interface ProductInTheCartEntity extends ProductEntity{
    quantity: number
}