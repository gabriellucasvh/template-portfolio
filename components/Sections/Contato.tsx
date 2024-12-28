import React from 'react'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, MessageCircle } from 'lucide-react'

const Contato = () => {
    return (
        <div className="px-6 py-10 md:px-20" id="contato">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Informações de contato */}
                <div className="space-y-5 text-center md:text-left">
                    <Titulo>Contato</Titulo>
                    <div className="flex flex-col items-start gap-2 ">
                        <Link
                            href="https://wa.me/5599999999999"
                            className="flex items-center justify-center md:justify-start hover:text-green-500 transition-colors duration-300"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <MessageCircle className="mr-1 h-5 w-5" /> Whatsapp: (99) 99999-9999
                        </Link>
                        <Link
                            href="mailto:email@exemplo.com"
                            className="flex items-center justify-center md:justify-start hover:text-red-500 transition-colors duration-300"
                        >
                            <Mail className="mr-1 h-5 w-5" /> email@exemplo.com
                        </Link>
                        <p className="flex items-center justify-center md:justify-start">
                            <MapPin className="mr-1 h-5 w-5" /> Endereço
                        </p>
                    </div>
                </div>
                {/* Imagem */}
                <div className="flex justify-center py-10 lg:py-0">
                    <Image
                        src="/IMAGEMxy.png"
                        className="border shadow rounded-lg"
                        alt="case"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contato
