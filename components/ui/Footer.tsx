import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8 lg:py-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-2xl font-bold">
                            Logo
                        </Link>
                    </div>
                    <nav className="lg:hidden mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center gap-4">
                            <li><Link href="#inicio" className="hover:text-gray-900">Início</Link></li>
                            <li><Link href="#sobre" className="hover:text-gray-900">Sobre</Link></li>
                            <li><Link href="#servicos" className="hover:text-gray-900">Serviços</Link></li>
                            <li><Link href="#trabalhos" className="hover:text-gray-900">Trabalhos</Link></li>
                            <li><Link href="#contato" className="hover:text-gray-900">Contato</Link></li>
                        </ul>
                    </nav>
                    <div className="flex justify-center gap-4 my-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                            <Instagram size={24} className='lg:hidden' />
                            <span className="sr-only">Instagram</span>
                            <p className='hidden lg:block'>
                                Instagram
                            </p>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                            <Facebook size={24} className='lg:hidden' />
                            <span className="sr-only">Facebook</span>
                            <p className='hidden lg:block'>
                                Facebook
                            </p>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                            <Linkedin size={24} className='lg:hidden' />
                            <span className="sr-only">LinkedIn</span>
                            <p className='hidden lg:block'>
                                LinkedIn
                            </p>
                        </a>
                    </div>
                    <div className="text-center text-sm mt-8 md:mt-0">
                        Feito por Gabriel • Copyright © {new Date().getFullYear()}. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}

