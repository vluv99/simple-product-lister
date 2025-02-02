
type ProductData = {
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

export const complexDummyData: ProductData[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        thumbnailURLs: [
            ['/imgs/iphone9.png', '/imgs/phones.png'],
            ['/imgs/surfaceLaptop4.png', '/imgs/brownPerfume.png'],
            ['/imgs/phones.png', '/imgs/surfaceLaptop4.png'],
            ['/imgs/brownPerfume.png', '/imgs/phones.png', '/imgs/surfaceLaptop4.png']
        ][i % 4],
        discountValue: i % 3 === 0 ? Math.floor(Math.random() * 20) + 5 : null,
        title: `Product ${i + 1}`,
        rating: (Math.random() * 5),
        description: `Description for product ${i + 1}, featuring premium quality and design.`,
        price: Math.floor(Math.random() * 1500) + 100,
        stock: i % 5 === 0 ? null : Math.floor(Math.random() * 100) + 1,
        brand: ['Microsoft', 'Apple', 'Gucci', 'Samsung'][i % 4],
        category: ['Electronics', 'Accessories', 'Perfumes', 'Laptops'][i % 4]
    }))
]

export const carouselTest: string[] = [
    '/imgs/iphone9.png',
    '/imgs/phones.png',
    '/imgs/surfaceLaptop4.png',
    '/imgs/brownPerfume.png',
]