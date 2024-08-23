-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cdc" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "objectif" TEXT NOT NULL,
    "public" TEXT NOT NULL,
    "personas" TEXT NOT NULL,
    "fonctionnalites" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "charteGraphique" TEXT NOT NULL,
    "maquette" TEXT NOT NULL,
    "technologie" TEXT NOT NULL,
    "hebergement" TEXT NOT NULL,
    "maintenance" TEXT NOT NULL,
    "evolution" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "delais" TEXT NOT NULL,

    CONSTRAINT "Cdc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "objectif" TEXT NOT NULL,
    "public" TEXT NOT NULL,
    "personas" TEXT NOT NULL,
    "fonctionnalites" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "charteGraphique" TEXT NOT NULL,
    "maquette" TEXT NOT NULL,
    "technologie" TEXT NOT NULL,
    "hebergement" TEXT NOT NULL,
    "maintenance" TEXT NOT NULL,
    "evolution" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "delais" TEXT NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Affaires" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Affaires_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CdcToClients" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CdcToClients_AB_unique" ON "_CdcToClients"("A", "B");

-- CreateIndex
CREATE INDEX "_CdcToClients_B_index" ON "_CdcToClients"("B");

-- AddForeignKey
ALTER TABLE "_CdcToClients" ADD CONSTRAINT "_CdcToClients_A_fkey" FOREIGN KEY ("A") REFERENCES "Cdc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CdcToClients" ADD CONSTRAINT "_CdcToClients_B_fkey" FOREIGN KEY ("B") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
