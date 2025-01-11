"use client";

import { useState } from "react";

interface Props {
  client: {
    id: string;
    code: string;
    companyName: string;
    companyDescription: string;
    logo?: string; // Champ optionnel
    adresse: string;
    postal: string;
    city: string;
    pays: string;
    telephone: string;
    email: string;
    date: Date;
  } | null;
}

export const MenuClient: React.FC<Props> = ({ client }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Général":
        if (!client) return <div>Aucun client trpouvé</div>;
        return (
          <div>
            <div>
              <div>
                <label className="">Nom</label>
                <p className=" bg-white">{client.companyName}</p>
              </div>
              <div>
                <label>Designation</label>
                <p className=" bg-white">{client.companyDescription}</p>
              </div>
            </div>
            <div>
              <label>Code</label>
              <p className=" bg-white">{client.code}</p>
            </div>
            <h3>Adresse postale</h3>
            <div>
              <div>
                <label>Adresse</label>
                <p className=" bg-white">{client.adresse}</p>
              </div>
              <div>
                <div>
                  <label>Ville</label>
                  <p className=" bg-white">{client.city}</p>
                </div>
                <div>
                  <label>Pays</label>
                  <p className=" bg-white">{client.pays}</p>
                </div>
              </div>
              <div>
                <label>Code postal</label>
                <p className=" bg-white">{client.postal}</p>
              </div>
              <div>
                <div>
                  <label>Téléphone</label>
                  <p className=" bg-white">{client.telephone}</p>
                </div>
                <div>
                  <label>Email</label>
                  <p className=" bg-white">{client.email}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Devis":
        if (!client) return <div>Aucun client trpouvé</div>;
        return <div>Voici vos devis en cours.</div>;
      case "Projets":
        if (!client) return <div>Aucun client trpouvé</div>;
        return <div>Découvrez vos projets actifs.</div>;
      case "Factures":
        if (!client) return <div>Aucun client trpouvé</div>;
        return <div>Consultez vos factures ici.</div>;
      case "Contacts":
        if (!client) return <div>Aucun client trpouvé</div>;
        return <div>Gérez vos contacts.</div>;
      default:
        if (!client) return <div>Aucun client trpouvé</div>;
        return (
          <div>Sélectionnez un élément du menu pour voir son contenu.</div>
        );
    }
  };

  return (
    <div>
      <header className="p-5 flex flex-col">
        <menu>
          <ul className="flex flex-row space-x-4">
            {["Général", "Devis", "Projets", "Factures", "Contacts"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => handleClick(item)}
                  className="cursor-pointer hover:underline"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </menu>
      </header>
      <div className="mt-5 p-4 bg-[#A6A6A6]">{renderContent()}</div>
    </div>
  );
};
