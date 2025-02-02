import type {NextApiRequest, NextApiResponse} from "next";
import {complexDummyData} from "@/util/dummyData";
import {ProductDTO} from "@/util/dtoTypes";

function getProductData(id: number): ProductDTO | undefined {
    return complexDummyData.find((product) => product.id === id);
}

type ResponseData = {
    data: ProductDTO
} | {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const productID = req.query.id ? Number(req.query.id) : null;
        if (productID) {
            const data = getProductData(productID);
            if (!data) {
                res.status(404).json({message: 'Product not found!'});
            } else {
                res.status(200).json({data: data});
            }
        } else{
            res.status(404).json({message: 'Product ID invalid!'});
        }
    }
}