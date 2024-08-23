"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {}

export const User: React.FC<Props> = () => {
  return (
    <div className=" flex flex-row justify-center items-center gap-2">
      <Link href="/">
        <Image
          src="/images/user.png"
          width={50}
          height={50}
          alt="logo du site"
        />
      </Link>
      <span>DALLOZ Julien</span>
    </div>
  );
};
