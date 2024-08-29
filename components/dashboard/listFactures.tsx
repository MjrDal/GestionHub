import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const ListFactures = async () => {
  return (
    <article className=" bg-white h-[420px] text-[#DA2F24] rounded-md">
      <h2>Factures en attente</h2>
      <div>
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </article>
  );
};
