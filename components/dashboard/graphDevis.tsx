export const GraphDevis = async () => {
  return (
    <article className=" bg-white h-[420px] text-[#FF4C00] px-6 rounded-md">
      <h2 className="mb-3">Devis</h2>
      <div className=" w-60 flex flex-row text-base justify-between">
        <p>Devis créer</p>
        <p>142</p>
      </div>
      <div className=" flex flex-row mb-8 text-base justify-between">
        <p>Devis accepter</p>
        <p>108</p>
      </div>
      <div className="relative w-60 h-60 flex items-center justify-center">
        <div className="w-60 h-60 bg-[#FF4C00]/[0.05] rounded-full absolute"></div>
        <div className="w-60 h-60 bg-[#FF4C00] rounded-full absolute"></div>
        <div className="w-40 h-40 bg-[#FFFFFF] rounded-full absolute"></div>
      </div>
    </article>
  );
};
