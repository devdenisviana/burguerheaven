import Image from 'next/image';

const MenuHighlights = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-[1300px] mx-auto px-4">
      <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
        <Image src="/images/menuItem2.png" alt="Fritas" width={650} height={400} />
      </div>

      <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
        <Image src="/images/menuItem1.png" alt="Frango Crocante" width={650} height={400} />
        
      </div>
    </section>
  );
};

export default MenuHighlights;
