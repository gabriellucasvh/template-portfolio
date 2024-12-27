import { Menu } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-background shadow">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">
                    <a href="/" aria-label="Página inicial">
                        Logo
                    </a>
                </h1>
                <button aria-label="Abrir menu de navegação">
                    <Menu className="w-10 h-10" />
                </button>
            </nav>
        </header>
    );
};

export default Header;
