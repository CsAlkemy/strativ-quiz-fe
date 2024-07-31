// data.ts
export interface Product {
    id: number;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Chic Floral Midi Dress - Perfect for Spring!',
        color: 'Blue',
        size: 'Medium',
        price: 150,
        quantity: 1,
        imageUrl: '/images/fake/dress.png',
    },
    {
        id: 2,
        name: 'Beautiful white dress for women',
        color: 'White',
        size: 'Small',
        price: 150,
        quantity: 1,
        imageUrl: '/images/fake/dress.png',
    },
    {
        id: 3,
        name: 'Cozy Oversized Sweater - Stay Warm in Style!',
        color: 'Blue',
        size: 'Large',
        price: 150,
        quantity: 4,
        imageUrl: '/images/fake/dress.png',
    },
];
