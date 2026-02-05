export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    tag?: {
        label: string;
        color: string;
    };
}
