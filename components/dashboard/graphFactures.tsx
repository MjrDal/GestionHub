export const GraphFacture = async () => {
  return (
    <article className=" bg-white h-[420px] text-[#DA2F24] px-6 rounded-md">
      <h2 className="mb-3">Factures</h2>
      <div className=" w-60 flex flex-row text-base justify-between">
        <p>Factures envoyer</p>
        <p>87</p>
      </div>
      <div className=" flex flex-row mb-8 text-base justify-between">
        <p>Facture payer</p>
        <p>80</p>
      </div>
      <div className="relative w-60 h-60 flex items-center justify-center">
        <div className="w-60 h-60 bg-[#DA2F24]/[0.05] rounded-full absolute"></div>
        <div className="w-60 h-60 bg-[#DA2F24] rounded-full absolute"></div>
        <div className="w-40 h-40 bg-[#FFFFFF] rounded-full absolute"></div>
      </div>
    </article>
  );
};
