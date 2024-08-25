"use client";

import { Icone } from "./Icone";

interface Props {}

export const Menu: React.FC<Props> = () => {
  return (
    <div className=" flex flex-row justify-center gap-8">
      <Icone name="Accueil" href="/" />
      <Icone name="Clients" href="/clients" />
      <Icone name="Fournisseurs" href="/fournisseurs" />
      <Icone name="Factures" href="/factures" />
      <Icone name="Devis" href="/devis" />
      <Icone name="Projets" href="/projets" />
      <Icone name="Taches" href="/taches" />
    </div>
  );
};
