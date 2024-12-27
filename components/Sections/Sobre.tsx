import React from 'react';
import Marquee from '../ui/marquee';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { ChevronRight, CircleDashed } from 'lucide-react';
import Titulo from '../Typograghy/Titulo';

const Sobre = () => {
    return (
        <div className="px-20" id='sobre'>
            {/* Seção Marquee */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background">
                <Marquee className="[--duration:10s] w-full">
                    <div className="flex items-center justify-center space-x-3">
                        <h3 className="text-7xl font-bold">Sobre</h3>
                        <p className="text-blue-500"><CircleDashed className='animate-spin' /></p>
                        <h3 className="text-7xl font-semibold">Sobre</h3>
                        <p className="text-red-500"><CircleDashed className='animate-spin' /></p>
                        <h3 className="text-7xl">Sobre</h3>
                        <p className="text-green-500"><CircleDashed className='animate-spin' /></p>
                    </div>
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>

            {/* Seção Sobre */}
            <div className="flex items-start justify-between py-10">
                {/* Conteúdo Esquerda */}
                <div className="w-1/2 space-y-5">
                    <Titulo>Olá, me chamo Lorem</Titulo>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, optio. Error adipisci voluptates cum illum nemo assumenda, omnis earum velit, repudiandae non, suscipit ex iusto. Corrupti, velit. Eaque, officia natus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam animi aliquid placeat inventore expedita, vero suscipit aspernatur tempore deleniti consectetur nam magnam, odio ipsa exercitationem voluptas quae doloribus quos!
                    </p>
                    <ul className="flex flex-col space-y-5 text-xl">
                        <li className="flex items-center">
                            <Link
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center hover:text-red-500 transition-colors duration-300"
                            >
                                <ChevronRight /> Instagram
                            </Link>
                            <Separator className="ml-3 flex-1" />
                        </li>
                        <li className="flex items-center">
                            <Link
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center hover:text-blue-500 transition-colors duration-300"
                            >
                                <ChevronRight /> Facebook
                            </Link>
                            <Separator className="ml-3 flex-1" />
                        </li>
                        <li className="flex items-center">
                            <Link
                                href="https://www.whatsapp.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center hover:text-green-500 transition-colors duration-300"
                            >
                                <ChevronRight /> Whatsapp
                            </Link>
                            <Separator className="ml-3 flex-1" />
                        </li>
                    </ul>
                </div>

                {/* Imagem Direita */}
                <div className="w-1/2 flex justify-end">
                    <Image src="/IMAGEMxy.png" className='border shadow rounded-lg' alt="logo" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default Sobre;
