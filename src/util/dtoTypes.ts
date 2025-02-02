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

// prisma didn't provide any specific type for the query result
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function productDTOfromDatabase(db_data:any): ProductDTO{
    return {
        id: db_data.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        thumbnailURLs: db_data.thumbnailURLs.map((t:any) => t.url),
        discountValue: db_data.discountValue?.toNumber() ?? null,
        title: db_data.title,
        rating: db_data.rating?.toNumber(),
        description: db_data.description,
        price: db_data.price?.toNumber(),
        stock: db_data.stock ?? null,
        brand: db_data.brand,
        category: db_data.category,
    }
}