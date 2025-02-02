/*
  Warnings:

  - Added the required column `productId` to the `ThumbnailURL` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ThumbnailURL" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ThumbnailURL" ADD CONSTRAINT "ThumbnailURL_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
