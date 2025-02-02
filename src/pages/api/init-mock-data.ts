import type {NextApiRequest, NextApiResponse} from "next";
import {withConnection} from "@/util/prisma-utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await withConnection(async (prisma) => {
        const imageOptions = [
            '/imgs/iphone9.png',
            '/imgs/phones.png',
            '/imgs/surfaceLaptop4.png',
            '/imgs/brownPerfume.png'
        ];

        for (let i = 0; i < 100; i++) {
            await prisma.product.create({
                data: {
                    title: `Product ${i + 1}`,
                    brand: ['Microsoft', 'Apple', 'Gucci', 'Samsung'][i % 4],
                    rating: (Math.random() * 5),
                    stock: i % 5 === 0 ? null : Math.floor(Math.random() * 100) + 1,
                    price: Math.floor(Math.random() * 1500) + 100,
                    discountValue: i % 3 === 0 ? Math.floor(Math.random() * 20) + 5 : null,
                    category: ['Electronics', 'Accessories', 'Perfumes', 'Laptops'][i % 4],
                    description: `Description for product ${i + 1}, featuring premium quality and design.`,
                    thumbnailURLs: {
                        createMany: {
                            data: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => ({
                                url: imageOptions[Math.floor(Math.random() * imageOptions.length)]
                            }))
                        }
                    }
                }
            })
        }
    })

    return res.status(200).json({message: 'Successfully created product'})
}