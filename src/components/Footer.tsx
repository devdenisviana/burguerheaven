const Footer = () => {
    return (
      <footer className="bg-[#B3A0CD] text-black grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-[30px] max-w-[1300px] mx-auto mt-6">

        <div>
          <h3 className="font-bowlby text-2xl">BURGER HEAVEN</h3>
        </div>
        <div>
          <ul className="space-y-1">
            <li>MAIS</li>
            <li>SOBRE</li>
            <li>MENU</li>
            <li>LOCALIZAÇÕES</li>
            <li>PRIVACIDADE</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">ENVIE SUA OPINIÃO:</h4>
          <input type="text" placeholder="Digite aqui" className="border p-2 rounded-md w-full mb-2" />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">ENVIAR</button>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  