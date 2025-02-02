import type { NextApiRequest, NextApiResponse } from 'next'
import {ProductListingItemDTO} from "@/util/dtoTypes";
import {imgNotFound, INIT_MAX_COUNT} from "@/util/consts";
import {withConnection} from "@/util/prisma-utils";

// TODO: these API requests are redundant since the whole rendering is mainly handled server side in App Router
// For the sake of the request, here's the implemented REST API version

async function getProductsData(skip: number, limit: number): Promise<ProductListingItemDTO[]> {
    const res = await withConnection(async (prisma) => {
        const products = await prisma.product.findMany({skip: skip, take: limit, include: {thumbnailURLs: true}});
        return products.map(p => {
            return {
                id: p.id,
                thumbnailURL: p.thumbnailURLs.length > 0 ? p.thumbnailURLs[0].url : imgNotFound,
                discountValue: p.discountValue?.toNumber() ?? null,
                title: p.title,
                price: p.price.toNumber(),
                description: p.description
            }
        })
    })

    return res ?? [];
}

type ResponseData = {
    data: ProductListingItemDTO[]
} | {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const limit = req.query.limit ? Number(req.query.limit) : INIT_MAX_COUNT;
        const productsData = await getProductsData(skip, limit);

        if (productsData.length > 0) {
            res.status(200).json({ data: productsData})
        } else {
            res.status(404).json({message: `No more product can be found!`})
        }
    }
}