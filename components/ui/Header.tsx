import Link from 'next/link';
import React from 'react';
import { Button } from "./button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

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
        <header className="hidden lg:block fixed top-0 z-50 w-full bg-background shadow">
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

export const MobileHeader = () => {
    return (
        <header className="lg:hidden top-0 z-50 w-full bg-background shadow">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">
                    <a href="/" aria-label="Página inicial">
                        Logo
                    </a>
                </h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size={"icon"}><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent className='font-grotesk'>
                        <SheetHeader >
                            <SheetTitle>Logo/Nome</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        {HeaderProps().map((item) => (
                            <ul className='py-2'>
                                <li key={item.name}>
                                    <Link href={item.href} className='hover:text-green-500 transition-colors duration-300'>
                                        {item.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                        <SheetFooter>
                            <SheetClose asChild>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
};

export default Header;