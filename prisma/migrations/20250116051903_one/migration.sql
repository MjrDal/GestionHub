-- CreateEnum
CREATE TYPE "StatusDevis" AS ENUM ('Accepter', 'Annuler', 'EnCours');

-- CreateEnum
CREATE TYPE "TacheEtat" AS ENUM ('OK', 'NOK');

-- CreateEnum
CREATE TYPE "ProjectsTachesEtat" AS ENUM ('AFaire', 'EnCours', 'Termine');

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "logo" TEXT,
    "adresse" TEXT NOT NULL,
    "postal" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "pays" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Devis" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "indice" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "status" "StatusDevis" NOT NULL DEFAULT 'EnCours',

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
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
