export interface Product {
    image: string;
    title: string;
    rating: string;
    discount: boolean;
    price: string;
    otherImages?: string[]
    actualPrice: string;
    discountTag: string;
    category: string;
    description: string;
    colors: string[];
    sizes: string[];
    qty?: number;
    id: string;
    qty: number
}

export type Cart = {
    id: string
    title: string,
    image: string,
    price: string,
    p_color: string,
    p_size: string,
    qty: number
}