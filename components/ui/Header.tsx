import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderProps = () => [
    {
        name: 'Inicio',
        href: '#inicio',
    },
    {
        name: 'Sobre',
        href: '#sobre',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Trabalhos',
        href: '#trabalhos',
    },
    {
        name: 'Contato',
        href: '#contato',
    },
]

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-background shadow">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">
                    <a href="/" aria-label="Página inicial">
                        Logo
                    </a>
                </h1>

                <div className='flex flex-row gap-5'>
                    {HeaderProps().map((item) => (
                        <ul>
                            <li key={item.name}>
                                <Link href={item.href} className='hover:text-green-500 transition-colors duration-300'>
                                    {item.name}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
