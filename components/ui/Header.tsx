import Link from 'next/link';
import { Button } from "./button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
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
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">
                    <Link href="/" aria-label="Página inicial">
                        Logo
                    </Link>
                </h1>
                <div>
                    <ul className='flex flex-row gap-5'>
                        {HeaderProps().map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className='hover:text-green-500 transition-colors duration-300'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export const MobileHeader = () => {
    return (
        <header className="lg:hidden fixed top-0 z-50 w-full bg-background shadow">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">
                    <Link href="/" aria-label="Página inicial">
                        Logo
                    </Link>
                </h1>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                            <Menu className='min-w-6 min-h-6' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 font-grotesk">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>Navegue pelo site</SheetDescription>
                        </SheetHeader>
                        <ul className="mt-4 space-y-4">
                            {HeaderProps().map((item) => (
                                <li key={item.name}>
                                    <SheetClose asChild>
                                        <Link
                                            href={item.href}
                                            className="block text-lg font-medium text-gray-800 hover:text-green-500 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button variant="outline" className="w-full mt-10">
                                    Fechar
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
};


export default Header;