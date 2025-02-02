import {StaticImport} from "next/dist/shared/lib/get-img-props";

type simpleData = {
    id: number;
    thumbnailURL: string;
    discountValue: number | null,
    title: string;
    price: number;
    description: string;
}
export const dummyData: simpleData[] = [
    {
        id: 1,
        thumbnailURL: '/imgs/iphone9.png',
        discountValue: 10,
        title: 'iPhone 9',
        price: 499,
        description: 'An affordable yet powerful iPhone with A13 Bionic chip and excellent camera.'
    },
    {
        id: 2,
        thumbnailURL: '/imgs/phones.png',
        discountValue: null,
        title: 'Android Phone Bundle',
        price: 799,
        description: 'A bundle of the latest Android smartphones with top-tier features and design.'
    },
    {
        id: 3,
        thumbnailURL: '/imgs/surfaceLaptop4.png',
        discountValue: 15,
        title: 'Surface Laptop 4',
        price: 1299,
        description: 'A sleek and powerful laptop with a high-resolution touchscreen and long battery life.'
    },
    {
        id: 4,
        thumbnailURL: '/imgs/brownPerfume.png',
        discountValue: 5,
        title: 'Luxury Brown Perfume',
        price: 120,
        description: 'A premium perfume with an elegant, long-lasting scent perfect for any occasion.'
    },
    ...Array.from({ length: 30 }, (_, i) => ({
        id: 17 + i,
        thumbnailURL: ['/imgs/iphone9.png', '/imgs/phones.png', '/imgs/surfaceLaptop4.png', '/imgs/brownPerfume.png'][i % 4],
        discountValue: i % 3 === 0 ? Math.floor(Math.random() * 20) + 5 : null,
        title: `Product ${17 + i}`,
        price: Math.floor(Math.random() * 1500) + 100,
        description: `Description for product ${17 + i}, featuring premium quality and design.`
    }))
]

type complexData = {
    id: number,
    thumbnailURLs: string[],
    discountValue: number | null,
    title: string,
    rating: number,
    description: string,
    price: number,
    stock: number | null,
    brand: string | null,
    category: string
}
export const complexDummyData: complexData[] = [
    ...Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        thumbnailURLs: [
            ['/imgs/iphone9.png', '/imgs/phones.png'],
            ['/imgs/surfaceLaptop4.png', '/imgs/brownPerfume.png'],
            ['/imgs/iphone9.png', '/imgs/surfaceLaptop4.png'],
            ['/imgs/phones.png', '/imgs/brownPerfume.png']
        ][i % 4],
        discountValue: i % 3 === 0 ? Math.floor(Math.random() * 20) + 5 : null,
        title: `Product ${i + 1}`,
        rating: (Math.random() * 5),
        description: `Description for product ${i + 1}, featuring premium quality and design.`,
        price: Math.floor(Math.random() * 1500) + 100,
        stock: i % 5 === 0 ? null : Math.floor(Math.random() * 100) + 1,
        brand: i % 4 === 0 ? 'Brand A' : i % 4 === 1 ? 'Brand B' : i % 4 === 2 ? 'Brand C' : null,
        category: ['Electronics', 'Accessories', 'Perfumes', 'Laptops'][i % 4]
    }))
]

export const carouselTest: string[] = [
    '/imgs/iphone9.png',
    '/imgs/phones.png',
    '/imgs/surfaceLaptop4.png',
    '/imgs/brownPerfume.png',
]