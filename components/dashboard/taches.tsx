"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { TachesForm } from "./taches/tachesForm";

interface Props {
  taches:
    | {
        id: string;
        title: string;
        designation: string;
        etat: string;
      }[]
    | null;
}

export const Taches: React.FC<Props> = ({ taches }) => {
  return (
    <article className="bg-white w-[350px] h-[864px] px-6 rounded-md">
      <div className="flex flex-row justify-between">
        <h2>Tâches</h2>
        <Dialog>
          <DialogTrigger>
            <Image
              src={`/images/Plus.png`}
              width={15}
              height={15}
              alt="Ajouter une tâche"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter une tâche</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <TachesForm />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <ScrollArea className="w-full h-[800px]">
          <div className="p-4">
            {!taches || taches.length === 0 ? ( // Vérification si `taches` est vide ou non défini
              <div>Pas de tâche trouvée</div>
            ) : (
              taches.map((item, index) => (
                <div
                  key={index} // La clé doit être unique
                  className="flex flex-row justify-between text-sm"
                >
                  <div>
                    <p>{item.title}</p>
                    <p>{item.designation}</p>
                  </div>
                  <Checkbox id={`terms-${index}`} />{" "}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </article>
  );
};
