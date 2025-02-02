-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "discountValue" DECIMAL(65,30),
    "title" VARCHAR(255) NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER,
    "brand" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThumbnailURL" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ThumbnailURL_pkey" PRIMARY KEY ("id")
);
