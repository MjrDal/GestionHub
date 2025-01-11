"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Devis() {
  const prisma = new PrismaClient();
  const devis = await prisma.devis.findMany();
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
      <div className="grid grid-cols-4 gap-4 px-20 pt-4">
        {devis.map((items) => (
          <div key={items.id}>
            <Link href={`/devis/${items.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {items.title} / {items.number} {items.indice}
                  </CardTitle>
                  <CardDescription>{items.designation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      items.status === "Accepter"
                        ? "text-green-500"
                        : items.status === "EnCours"
                        ? "text-yellow-500"
                        : items.status === "Annuler"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {items.status}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
