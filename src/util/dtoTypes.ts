// DTO = data transfer object types used by backend and frontend

export type ProductListingItemDTO = {
    id: number;
    thumbnailURL: string;
    discountValue: number | null,
    title: string;
    price: number;
    description: string;
}

export type ProductDTO = {
    id: number,
    thumbnailURLs: string[],
    discountValue: number | null,
    title: string,
    rating: number,
    description: string,
    price: number,
    stock: number | null,
    brand: string,
    category: string | null
}