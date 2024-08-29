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

export default async function Clients() {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();
  return (
    <main className="">
      <div>
        <div>
          <Link href="/">
            <Button>Retour</Button>
          </Link>
        </div>
        <div>
          <Link href="/clients/new">
            <Button>Nouveau</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-20 pt-4">
        {clients.map((client) => (
          <div key={client.id}>
            <Link href={`/clients/${client.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{client.code}</CardTitle>
                  <CardDescription>{client.logo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{client.companyName}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
