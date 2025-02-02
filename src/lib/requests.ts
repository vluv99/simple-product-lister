'use server'

import { headers } from 'next/headers';
import {ProductDTO, ProductListingItemDTO} from "@/util/dtoTypes";

export const getProducts = async (skip: number = 0, limit: number = 10) => {
    const headersList = await headers();
    const baseURL = headersList.get('host');

    try {
        const url = `http://${baseURL}/api/products?skip=${skip}&limit=${limit}`;
        const response = await fetch(url)
        const res =  (await response.json()) as {
            data: ProductListingItemDTO[]
        };
        return res.data;
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}

export const getSingleProduct = async (id: number) => {
    const headersList = await headers();
    const baseURL = headersList.get('host');
    //const id = headersList.get('id');

    try {
        const url = `http://${baseURL}/api/product/${id}`;
        console.log(url);
        const response = await fetch(url)
        const res =  (await response.json()) as {
            data: ProductDTO
        };
        return res.data;
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}