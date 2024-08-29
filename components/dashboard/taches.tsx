import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Taches = async () => {
  return (
    <article className=" bg-white w-[350px] h-[864px] px-6 rounded-md">
      <div className=" flex flex-row justify-between">
        <h2>Taches</h2>
        <Dialog>
          <DialogTrigger>
            <Image
              src={`/images/Plus.png`}
              width={15}
              height={15}
              alt="logo du site"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Taches</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <ScrollArea className="w-full h-[800px]">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div
                  key={tag}
                  className="flex flex-row justify-between text-sm"
                >
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tag}
                    </label>
                  </div>
                  <Checkbox id="terms1" />
                </div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </article>
  );
};
