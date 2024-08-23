import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";

const RoutePage = async (
  props: PageParams<{
    clientId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const client = await prisma.clients.findUnique({
    where: { id: props.params.clientId },
    include: { cahierDesCharges: true },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/clients">
        <Button>Retour</Button>
      </Link>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{client?.companyName}</CardTitle>
            <CardDescription>{client?.number}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{client?.companyDescription}</p>
            <div>
              <p>{client?.contactName}</p>
              <p>{client?.contactEmail}</p>
              <p>{client?.contactPhoneNumber}</p>
            </div>
          </CardContent>
          <CardFooter className=" flex flex-row gap-2">
            <Button asChild>
              <Link href={`/cdc/${client?.id}`}>Creer un nouveau Cdc</Link>
            </Button>
            <Button asChild>
              <Link href={`/cdc/${client?.id}`}>Creer un nouveau devis</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className=" flex flex-row gap-4">
        <div>
          <ScrollArea className="h-72 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Liste des Cahiers des charges
              </h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Numéro</TableHead>
                    <TableHead>Titre</TableHead>
                    <TableHead>Ouvrir</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {client?.cahierDesCharges.map((item) => (
                    <>
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.number}
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>
                          <Button asChild>
                            <Link href={`/cdc/${client.id}/${item.id}`}>
                              <BiDetail />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </div>
        <div>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Liste des devis
              </h4>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
