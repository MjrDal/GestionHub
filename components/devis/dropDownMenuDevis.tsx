"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { dropDownMenuDevisAction } from "./DropDownMenuDevisAction";

interface Props {
  id: string;
}

function onSubmit(values: { id: string; text: string }) {
  console.log("ID", values.id);
  console.log("text", values.text);
  dropDownMenuDevisAction(values);
}

export const DropDownMenuDevisLeft: React.FC<Props> = ({ id }) => {
  const handleClick = (text: string) => {
    onSubmit({ id, text });
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaArrowAltCircleLeft />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              handleClick("EnCours");
            }}
            id={id}
          >
            En cous
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Accepter");
            }}
            id={id}
          >
            Accepter
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Annuler");
            }}
            id={id}
          >
            Annuler
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Archive");
            }}
            id={id}
          >
            Archivé
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const DropDownMenuDevisRight: React.FC<Props> = ({ id }) => {
  const handleClick = (text: string) => {
    onSubmit({ id, text });
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaArrowAltCircleRight />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              handleClick("EnCours");
            }}
            id={id}
          >
            En cous
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Accepter");
            }}
            id={id}
          >
            Accepter
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Annuler");
            }}
            id={id}
          >
            Annuler
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleClick("Archive");
            }}
            id={id}
          >
            Archivé
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
