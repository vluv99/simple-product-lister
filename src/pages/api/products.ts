import type { NextApiRequest, NextApiResponse } from 'next'
import {dummyData} from "@/util/dummyData";

// TODO: these API requests are redundant since the whole rendering is mainly handled server side in App Router
// For the sake of the request, here's the implemented REST API version

function getProductsData(skip: number, limit: number) {
    return dummyData.slice(skip, skip+limit);
}

type ResponseData = {
    data:{
        id: number,
        thumbnailURL: string,
        discountValue: number | null,
        title: string,
        price: number,
        description: string,
    }[]
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