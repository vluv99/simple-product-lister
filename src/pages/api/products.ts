import type { NextApiRequest, NextApiResponse } from 'next'
import {complexDummyData} from "@/util/dummyData";
import {ProductListingItemDTO} from "@/util/dtoTypes";
import {imgNotFound} from "@/util/consts";

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
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const limit = req.query.limit ? Number(req.query.limit) : 10;

        res.status(200).json({ data: getProductsData(skip, limit) })
    }
}