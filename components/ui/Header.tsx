import { Menu } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-background shadow">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Logo</h1>
                <button>
                    <Menu className="w-10 h-10" />
                </button>
            </div>
        </header>
    );
};

export default Header;
