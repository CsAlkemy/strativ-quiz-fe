import { create } from 'zustand';

interface ProductState {
    productName: string;
    productSubtitle: string;
    quantity: number;
    price: number;
    selectedSize: string;
    selectedColor: string;
    setProductName: (name: string) => void;
    setProductSubtitle: (subtitle: string) => void;
    setQuantity: (quantity: number) => void;
    setPrice: (price: number) => void;
    setSelectedSize: (size: string) => void;
    setSelectedColor: (color: string) => void;
}

export const useProductStore = create<ProductState>(set => ({
    productName: 'Embrace Sideboard',
    productSubtitle: 'Teixeira Design Studio',
    quantity: 1,
    price: 1,
    selectedSize: 'Small',
    selectedColor: '#ECDECC',
    setProductName: name => set({ productName: name }),
    setProductSubtitle: subtitle => set({ productSubtitle: subtitle }),
    setQuantity: quantity => set({ quantity }),
    setPrice: price => set({ price }),
    setSelectedSize: size => set({ selectedSize: size }),
    setSelectedColor: color => set({ selectedColor: color }),
}));
