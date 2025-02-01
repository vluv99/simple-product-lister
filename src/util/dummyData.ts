import {StaticImport} from "next/dist/shared/lib/get-img-props";

type Data = {
    thumbnailURL: string | StaticImport;
    discountValue?: number| undefined;
    title: string;
    price: number;
    description: string;
}
export const dummyData: Data[] = [
    {
        thumbnailURL: '/imgs/iphone9.png',
        discountValue: 12.96,
        title: 'iPhone 9',
        price: 549,
        description: 'An apple mobile which is nothing like apple'
    },
    {
        thumbnailURL: '/imgs/phones.png',
        discountValue: 17.94,
        title: 'iPhone X',
        price: 899,
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with with OLED technology A12 Bionic chip.'
    },
    {
        thumbnailURL: '/imgs/surfaceLaptop4.png',
        discountValue: 10.23,
        title: 'Microsoft Surface Laptop 4',
        price: 1499,
        description: 'Style and speed. Stand out on HD video calls backed by Studio Mics.'
    },
    {
        thumbnailURL: '/imgs/brownPerfume.png',
        discountValue: 15.66,
        title: 'Brown Perfume',
        price: 40,
        description: 'An apple mobile which is nothing like apple'
    }
]