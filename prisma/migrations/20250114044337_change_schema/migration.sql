/*
  Warnings:

  - You are about to drop the column `contactEmail` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `contactName` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhoneNumber` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `budget` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `charteGraphique` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `delais` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `evolution` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `fonctionnalites` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `hebergement` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `maintenance` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `maquette` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `objectif` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `personas` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `publicVise` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `structure` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the column `technologie` on the `Devis` table. All the data in the column will be lost.
  - You are about to drop the `Affaires` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cdc` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CdcToClients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adresse` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pays` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `Devis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indice` to the `Devis` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusDevis" AS ENUM ('Accepter', 'Annuler', 'EnCours');

-- CreateEnum
CREATE TYPE "TacheEtat" AS ENUM ('OK', 'NOK');

-- CreateEnum
CREATE TYPE "ProjectsTachesEtat" AS ENUM ('AFaire', 'EnCours', 'Termine');

-- DropForeignKey
ALTER TABLE "_CdcToClients" DROP CONSTRAINT "_CdcToClients_A_fkey";

-- DropForeignKey
ALTER TABLE "_CdcToClients" DROP CONSTRAINT "_CdcToClients_B_fkey";

-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "contactEmail",
DROP COLUMN "contactName",
DROP COLUMN "contactPhoneNumber",
DROP COLUMN "number",
ADD COLUMN     "adresse" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "pays" TEXT NOT NULL,
ADD COLUMN     "postal" TEXT NOT NULL,
ADD COLUMN     "telephone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Devis" DROP COLUMN "budget",
DROP COLUMN "charteGraphique",
DROP COLUMN "delais",
DROP COLUMN "evolution",
DROP COLUMN "fonctionnalites",
DROP COLUMN "hebergement",
DROP COLUMN "maintenance",
DROP COLUMN "maquette",
DROP COLUMN "objectif",
DROP COLUMN "personas",
DROP COLUMN "publicVise",
DROP COLUMN "structure",
DROP COLUMN "technologie",
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "indice" TEXT NOT NULL,
ADD COLUMN     "status" "StatusDevis" NOT NULL DEFAULT 'EnCours';

-- DropTable
DROP TABLE "Affaires";

-- DropTable
DROP TABLE "Cdc";

-- DropTable
DROP TABLE "_CdcToClients";

-- CreateTable
CREATE TABLE "Contacts" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "indice" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetcsTaches" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "etat" "ProjectsTachesEtat" NOT NULL DEFAULT 'AFaire',

    CONSTRAINT "ProjetcsTaches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factures" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "indice" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "designation" TEXT NOT NULL,

    CONSTRAINT "Factures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taches" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "etat" "TacheEtat" NOT NULL DEFAULT 'NOK',

    CONSTRAINT "Taches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientsToContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientsToDevis" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientsToProjects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientsToFactures" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectsToProjetcsTaches" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientsToContacts_AB_unique" ON "_ClientsToContacts"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientsToContacts_B_index" ON "_ClientsToContacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientsToDevis_AB_unique" ON "_ClientsToDevis"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientsToDevis_B_index" ON "_ClientsToDevis"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientsToProjects_AB_unique" ON "_ClientsToProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientsToProjects_B_index" ON "_ClientsToProjects"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientsToFactures_AB_unique" ON "_ClientsToFactures"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientsToFactures_B_index" ON "_ClientsToFactures"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToProjetcsTaches_AB_unique" ON "_ProjectsToProjetcsTaches"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToProjetcsTaches_B_index" ON "_ProjectsToProjetcsTaches"("B");

-- AddForeignKey
ALTER TABLE "_ClientsToContacts" ADD CONSTRAINT "_ClientsToContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToContacts" ADD CONSTRAINT "_ClientsToContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToDevis" ADD CONSTRAINT "_ClientsToDevis_A_fkey" FOREIGN KEY ("A") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToDevis" ADD CONSTRAINT "_ClientsToDevis_B_fkey" FOREIGN KEY ("B") REFERENCES "Devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToProjects" ADD CONSTRAINT "_ClientsToProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToProjects" ADD CONSTRAINT "_ClientsToProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToFactures" ADD CONSTRAINT "_ClientsToFactures_A_fkey" FOREIGN KEY ("A") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToFactures" ADD CONSTRAINT "_ClientsToFactures_B_fkey" FOREIGN KEY ("B") REFERENCES "Factures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToProjetcsTaches" ADD CONSTRAINT "_ProjectsToProjetcsTaches_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToProjetcsTaches" ADD CONSTRAINT "_ProjectsToProjetcsTaches_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjetcsTaches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
