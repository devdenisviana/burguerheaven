const AboutSection = () => {
    return (
      <section className="bg-lime-400 text-black border-4 border-black rounded-2xl max-w-[1300px] mx-auto mt-[-40px] p-8 md:flex justify-between items-start">
        <h2 className="text-[32px] md:text-[48px] font-bold uppercase max-w-[45%] leading-[1]">
          O HAMBÚRGUER ACIMA DE TODOS, OS HAMBÚRGUERES
        </h2>
        <div className="mt-4 md:mt-0 md:max-w-[50%]">
          <p className="mb-4">
            Começamos com carne 100% Angus, selecionada a dedo para garantir a suculência e o sabor incomparáveis. Cada pedaço é grelhado na perfeição, com um toque especial que o torna irresistível.
          </p>
          <button className="bg-white border-4 border-black px-6 py-3 font-bold shadow-[4px_4px_0px_0px_black] hover:bg-gray-200 transition">
            SOBRE ISSO
          </button>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  