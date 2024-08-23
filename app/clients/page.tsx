"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Clients() {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();
  return (
    <main className="">
      <div>
        <Link href="/">
          <Button>Retour</Button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 px-20 pt-4">
        {clients.map((item) => (
          <div key={item.id}>
            <Link href={`/clients/${item.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.companyName}</CardTitle>
                  <CardDescription>{item.number}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
