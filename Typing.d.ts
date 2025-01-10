export interface Product {
    image?: string;
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
}