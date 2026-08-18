import type { Product } from "../type/Product";

export function getProduct():Promise<Product[]> {

    const respons = fetch('https://fakestoreapi.com/products')
    .then((data) => {

        return data.json()

    })
    return respons
}