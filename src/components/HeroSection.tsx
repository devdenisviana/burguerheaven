import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#1E1E1E] text-white text-center px-4 py-12">
      <h1 className="font-bowlby text-[54px] sm:text-[72px] md:text-[86px] lg:text-[96px] leading-[1]">
        A HAMBURGUERIA <br /> ORGÂNICA FAVORITA <br /> DE SÃO PAULO
      </h1>

      <div className="relative my-12 max-w-[1300px] mx-auto">
                
        <div className="relative z-10">
          <Image src="/images/Burgers.png" alt="Hamburguer" width={1200} height={400} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
