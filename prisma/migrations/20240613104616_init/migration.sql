/*
  Warnings:

  - You are about to drop the column `public` on the `Cdc` table. All the data in the column will be lost.
  - You are about to drop the column `public` on the `Devis` table. All the data in the column will be lost.
  - Added the required column `publicVise` to the `Cdc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicVise` to the `Devis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cdc" DROP COLUMN "public",
ADD COLUMN     "publicVise" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Devis" DROP COLUMN "public",
ADD COLUMN     "publicVise" TEXT NOT NULL;
