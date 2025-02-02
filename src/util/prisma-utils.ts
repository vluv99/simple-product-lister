import {PrismaClient} from "@prisma/client";

export async function withConnection<T>(fn: (cn:PrismaClient) => Promise<T>) {
    const prisma = new PrismaClient();
    try {
        const res = await fn(prisma);
        await prisma.$disconnect();
        return res;
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
    }
}