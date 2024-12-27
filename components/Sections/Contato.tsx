import React from 'react'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
const Contato = () => {
    return (
        <div className='px-20 py-10' id='contato'>
            <div className='flex items-center justify-between'>
                <div className='space-y-5'>
                    <Titulo>Contato</Titulo>
                    <div className='grid gap-2'>
                        <Link href={'https://wa.me/5599999999999'} className='flex items-center hover:text-green-500 transition-colors duration-300' target='_blank' rel='noreferrer noopener'> <MessageCircle className='mr-1 h-5 w-5' /> Whatsapp: (99)99999-9999</Link>
                        <Link href={'mailto:email@exemplo.com'} className='flex items-center hover:text-red-500 transition-colors duration-300'>
                        <Mail className='mr-1 h-5 w-5' /> email@exemplo.com</Link>
                        <p className='flex items-center'>
                            <MapPin className='mr-1 h-5 w-5' /> Endereço</p>
                    </div>
                </div>
                <div>
                    <Image src="/IMAGEMxy.png" className='border shadow rounded-lg' alt="case" width={300} height={300} />
                </div>
            </div>
        </div>
    )
}

export default Contato