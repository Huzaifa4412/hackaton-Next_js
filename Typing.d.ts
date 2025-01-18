export interface Product {
    _id: string;
    name: string;
    rating: number;
    discountPercent: number;
    colors: string[];
    image: string;
    category: string;
    price: string;
    sizes: string[];
    description: string;
    discountedPrice: string;
}

export type ProductCard_type = {
    image: string,
    name: string,
    rating: number,
    price: number,
    discountPercent: number,
    discountedPrice: number,
    _id: string,

}
export interface Cart {
    id: string;
    title: string;
    image: string;
    qty: number;
    price: string;
    p_color: string;
    p_size: string;
}