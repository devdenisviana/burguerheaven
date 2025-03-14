import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

// Função para normalizar os nomes das páginas removendo acentos e espaços
const normalizePath = (text: string) =>
    text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "-"); // Substitui espaços por hífen

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='max-w-[1440px] mx-auto min-h-screen flex flex-col'>
            {/* Barra de navegação */}
            <nav className='bg-[#1E1E1E] text-white p-4 '>
                <ul className='flex justify-between items-center'>
                    {/* Grupo 1: "BURGUER HEAVEN" à esquerda */}
                    <li key="BURGUER HEAVEN">
                        <Link 
                            href="/" 
                            className="hover:text-gray-300 font-bowlby text-3xl"
                        >
                            BURGUER HEAVEN
                        </Link>
                    </li>

                    {/* Grupo 2: Demais itens à direita */}
                    <ul className='flex space-x-6 '>
                        {["SOBRE", "MENU", "ENCOMENDAR ONLINE"].map((item) => (
                            <li key={item}>
                                <Link 
                                    href={`/${normalizePath(item)}`} 
                                    className="hover:text-gray-300  "
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </ul>
            </nav>

            {/* Conteúdo da página */}
            <main className='flex-grow p-6'>
                {children}
            </main>

            {/* Rodapé
            <footer className='bg-gray-900 text-white p-4 text-center'>
                © {new Date().getFullYear()} Minha Empresa - Todos os direitos reservados.
            </footer> */}
        </div>
    );
}