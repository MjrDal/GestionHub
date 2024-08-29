import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Projects = async () => {
  return (
    <article className=" bg-white w-[350px] h-[864px] px-6 rounded-md">
      <h2>Projets</h2>
      <div className="">
        <ScrollArea className="w-full h-[800px]">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </article>
  );
};
