import type {NextApiRequest, NextApiResponse} from "next";
import {ProductDTO, productDTOfromDatabase} from "@/util/dtoTypes";
import {withConnection} from "@/util/prisma-utils";

async function getProductData(id: number): Promise<ProductDTO | undefined> {
    return await withConnection(async (prisma) => {
        const product = await prisma.product.findFirst({where: {id: id}, include: {thumbnailURLs: true}});
        return product ? productDTOfromDatabase(product) : undefined;
    })
}

type ResponseData = {
    data: ProductDTO
} | {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const productID = req.query.id ? Number(req.query.id) : null;
        if (productID) {
            const data = await getProductData(productID);
            if (!data) {
                res.status(404).json({message: 'Product not found!'});
            } else {
                res.status(200).json({data: data});
            }
        } else {
            res.status(404).json({message: 'Product ID invalid!'});
        }
    }
}