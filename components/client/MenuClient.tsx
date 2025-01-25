"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  DropDownMenuDevisLeft,
  DropDownMenuDevisRight,
} from "../devis/dropDownMenuDevis";

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
    Devis: {
      id: string;
      number: string;
      indice: string;
      title: string;
      designation: string;
      status: string;
    }[];
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
        return (
          <div className=" flex flex-row">
            <ScrollArea>
              <div>
                {client.Devis.filter((item) => item.status === "EnCours")
                  .length === 0 ? (
                  <div>Pas de devis en cours</div>
                ) : (
                  client.Devis.filter((item) => item.status === "EnCours").map(
                    (item) => (
                      <div key={item.id}>
                        <div className=" flex flex-row items-center gap-2">
                          <div>
                            {item.number} {item.indice}
                          </div>
                          <div>
                            <DropDownMenuDevisRight id={item.id} />
                          </div>
                        </div>

                        <Separator className="my-2" />
                      </div>
                    )
                  )
                )}
              </div>
            </ScrollArea>
            <ScrollArea>
              <div>
                {client.Devis.filter((item) => item.status === "Accepter")
                  .length === 0 ? (
                  <div>Pas de devis accepter</div>
                ) : (
                  client.Devis.filter((item) => item.status === "Accepter").map(
                    (item) => (
                      <div key={item.id}>
                        <div className=" flex flex-row items-center gap-2">
                          <div>
                            <DropDownMenuDevisLeft id={item.id} />
                          </div>
                          <div>
                            {item.number} {item.indice}
                          </div>
                          <div>
                            <DropDownMenuDevisRight id={item.id} />
                          </div>
                        </div>

                        <Separator className="my-2" />
                      </div>
                    )
                  )
                )}
              </div>
            </ScrollArea>
            <ScrollArea>
              <div>
                {client.Devis.filter((item) => item.status === "Annuler")
                  .length === 0 ? (
                  <div>Pas de devis annulé</div>
                ) : (
                  client.Devis.filter((item) => item.status === "Annuler").map(
                    (item) => (
                      <div key={item.id}>
                        <div>
                          <div>
                            <DropDownMenuDevisLeft id={item.id} />
                          </div>
                          <div>
                            {item.number} {item.indice}
                          </div>
                        </div>

                        <Separator className="my-2" />
                      </div>
                    )
                  )
                )}
              </div>
            </ScrollArea>
          </div>
        );
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
                  className={`cursor-pointer ${
                    selectedItem === item
                      ? "text-white bg-[#A6A6A6]"
                      : "text-black"
                  }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </menu>
      </header>
      <div className="p-4 bg-[#A6A6A6]">{renderContent()}</div>
    </div>
  );
};
