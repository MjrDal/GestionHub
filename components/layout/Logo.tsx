"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={143}
          height={95}
          alt="logo du site"
        />
      </Link>
    </div>
  );
};
