import { PageParams } from "@/components/types/next";

const RoutePage = async (
  props: PageParams<{
    clientId: string;
  }>
) => {
  return <div className=" flex flex-col h-full gap-4 m-5"></div>;
};

export default RoutePage;
