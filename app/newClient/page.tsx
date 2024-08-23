import { NewClientForm } from "@/components/clients/NewClientForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function NewClient() {
  return (
    <main className="">
      <div>
        <Link href="/">
          <Button>Retour</Button>
        </Link>
      </div>
      <div className=" m-4">
        <Card>
          <CardHeader className=" flex flex-row justify-between">
            <CardTitle>Formulaire pour la creation de nouveau client</CardTitle>
            <div>
              <Link href="/">
                <IoMdClose className="text-3xl" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <NewClientForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
