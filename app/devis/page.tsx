"use server";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Devis() {
  return (
    <main className="">
      <div className="flex flex-row gap-2">
        <div>
          <Link href="/">
            <Button>Retour</Button>
          </Link>
        </div>
        <div>
          <Link href="/devis/new">
            <Button>Nouveau</Button>
          </Link>
        </div>
      </div>
      <p>page devis</p>
    </main>
  );
}
