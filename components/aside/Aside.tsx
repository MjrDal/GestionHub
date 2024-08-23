import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  clients: {
    id: string;
    number: string;
    companyName: string;
    companyDescription: string;
    contactName: string;
    contactEmail: string;
    contactPhoneNumber: string;
  }[];
}

export const Aside: React.FC<Props> = ({ clients }) => {
  return (
    <aside>
      <Card className=" bg-slate-500 w-60">
        <CardHeader>
          <CardTitle>Liste des clients:</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col">
          {clients.map((item) => (
            <Button variant="ghost" key={item.id} asChild>
              <Link href={`/clients/${item.id}`}>{item.companyName}</Link>
            </Button>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};
