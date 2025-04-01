import Link from 'next/link';

const Navbar = () => {
  const navItems = ['SOBRE', 'MENU', 'ENCOMENDAR ONLINE'];

  const normalizePath = (text: string) =>
    text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  return (
    <nav className="bg-[#1E1E1E] text-white p-4 border border-black">
      <div className="flex justify-between items-center max-w-[1300px] mx-auto divide-x divide-black">
        {/* Logo */}
        <div className="pr-6">
          <Link href="/" className="hover:text-gray-300 font-bowlby text-2xl">
            BURGER HEAVEN
          </Link>
        </div>

        {/* Itens do menu */}
        <ul className="flex items-center divide-x divide-black">
          {navItems.map((item, index) => (
            <li key={item} className="px-6">
              <Link
                href={`/${normalizePath(item)}`}
                className={`hover:text-gray-300 font-bold uppercase text-sm tracking-wide ${
                  item === 'ENCOMENDAR ONLINE'
                    ? 'bg-[#B3A0CD] text-black px-3 py-1 rounded-sm'
                    : ''
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
