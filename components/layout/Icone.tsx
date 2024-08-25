"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
}

export const Icone: React.FC<Props> = ({ name, href }) => {
  return (
    <div>
      <Link href={href}>
        <Image
          src={`/images/${name}.png`}
          width={50}
          height={50}
          alt="logo du site"
        />
        <span>{name}</span>
      </Link>
    </div>
  );
};
