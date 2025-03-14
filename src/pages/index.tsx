import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-1 gap-4 bg-[#1E1E1E]">
        {/* Bloco do título e da imagem do hambúrguer */}
        <div>
          <div className="p-6 ">
            <h1 className="font-bowlby text-[107.9px] leading-[89%] tracking-[2%] text-center font-[900]">A HAMBURGUERIA ORGÂNICA FAVORITA DE SÃO PAULO</h1>
          </div>
          <div>
            <Image src="/images/Burgers.png" alt='Imagem do Hamburguer' width={1339} height={478} />
          </div>
        </div>

        {/* Restante do conteúdo */}
        <div className='absolut w-[1340px] h-[369px] bg-lime-400 border-4 border-black rounded-x1 p-8 flex justify-between items-start '>
          <h2 className="text-[64px] leading-[1] font-bold uppercase text-black max-w-[50%]">O HAMBURGUER ACIMA DE TODOS, OS HAMBURBUGUERES</h2>
          <div className='max-w-[40%] flex flex-col gap-4'>
            <p className="text-lg text-black">Começamos com carne 100% Angus, selecionada a dedo para garantir a suculência e o sabor incomparáveis. Cada pedaço é grelhado na perfeição, com um toque especial que o torna irresistível</p>
            <button className='bg-white border-4 border-black px-6 py-3 font-bold text-black shadow-lg hover:bg-gray-200 transition-all w-[176px] h-[60px] shadow-[4px_4px_0px_0px_black] absolute bottom-[-290px]'>SOBRE ISSO</button>
          </div>
        </div>

        <div className='flex justify-between'>
          <div>
            <Image src="/images/fritas.png" alt="Fritas" width={650} height={753}/>
          </div>

          <div>
            <Image src="/images/3burguers.png" alt="3 burguers" width={650} height={753} />
          </div>
        </div>

        {/* Texto animado */}
        <p className='uppercase animate-slide whitespace-nowrap overflow-hidden custom-text w-full'>the best burger i’ve ever had</p>
        <div>

        <div>
          <Image src="/images/balcao.png" alt="imagem do balcão" width={1340} height={503}/>
        </div>

        <div>
          <p>ENCOMENDAR ONLINE OU VENHA VISITAR-NOS HOJE</p>
          <button>COMPRAR AGORA</button>
        </div>

        {/* Quadro de 3 colunas */}
        <div className='grid grid-cols-3 gap-4 p-4 bg-[#B3A0CD] rounded-3x1 text-black p-6 relative rounded-[30px] width-[1340] height-[320]'>
          <div>
            <h2 className='font-bowlby  font-normal'>BURGUER HEAVEN</h2>
          </div>

          <div>
            <ul>
              <li>MAIS</li>
              <li>SOBRE</li>
              <li>MENU</li>
              <li>LOCALIZAÇÕES</li>
              <li>PRIVACIDADE</li>
            </ul>
          </div>

          <div>
            <h3>ENVIE SUA OPINIÃO:</h3>
            <input type="text" className='border p-2 rounded-md' />
            <button className='bg-gray-800 text-white p-2 rounded-md'>ENVIAR</button>
          </div>
        </div>

        </div>
      </section>
    </Layout>
  );
}