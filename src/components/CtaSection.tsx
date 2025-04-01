import Image from 'next/image';

const CtaSection = () => {
  return (
    <>
      <section className="mt-12">
        <Image src="/images/balcao.png" alt="Balcão com clientes" width={1340} height={503} className="mx-auto" />
      </section>

      <section className="text-white text-center bg-[#1E1E1E] py-12 px-4 mb-0">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          ENCOMENDAR ONLINE OU VENHA VISITAR-NOS HOJE
        </h2>
        <button className="bg-lime-400 text-black px-8 py-4 text-lg font-bold rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-lime-300 transition">
          COMPRAR AGORA
        </button>
      </section>
    </>
  );
};

export default CtaSection;
