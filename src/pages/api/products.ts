import type { NextApiRequest, NextApiResponse } from 'next'
import {complexDummyData} from "@/util/dummyData";
import {ProductListingItemDTO} from "@/util/dtoTypes";
import {imgNotFound, INIT_MAX_COUNT} from "@/util/consts";

// TODO: these API requests are redundant since the whole rendering is mainly handled server side in App Router
// For the sake of the request, here's the implemented REST API version

function getProductsData(skip: number, limit: number):ProductListingItemDTO[] {
    return complexDummyData.slice(skip, skip+limit).map(p => {
        return {
            id: p.id,
            thumbnailURL: p.thumbnailURLs.length > 0 ? p.thumbnailURLs[0] : imgNotFound,
            discountValue: p.discountValue,
            title: p.title,
            price: p.price,
            description: p.description
        }
    })
}

type ResponseData = {
    data: ProductListingItemDTO[]
} | {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const limit = req.query.limit ? Number(req.query.limit) : INIT_MAX_COUNT;
        const productsData = getProductsData(skip, limit);

        if (productsData.length > 0) {
            res.status(200).json({ data: productsData})
        } else {
            res.status(404).json({message: `No more product can be found!`})
        }
    }
}