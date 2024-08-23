"use client";

import { Icone } from "./Icone";

interface Props {}

export const Menu: React.FC<Props> = () => {
  return (
    <div className=" flex flex-row justify-center gap-8">
      <Icone name="Accueil" />
      <Icone name="Clients" />
      <Icone name="Fournisseurs" />
      <Icone name="Factures" />
      <Icone name="Devis" />
      <Icone name="Projets" />
      <Icone name="Taches" />
    </div>
  );
};
