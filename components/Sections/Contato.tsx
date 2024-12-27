import React from 'react'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'
import Image from 'next/image'
const Contato = () => {
    return (
        <div className='px-20 py-10' id='contato'>
            <div className='flex items-center justify-between'>
                <div>
                    <Titulo>Contato</Titulo>
                    <div className='grid'>
                        <Link href={'https://wa.me/5599999999999'} target='_blank' rel='noreferrer noopener'>Whatsapp: (99)99999-9999</Link>
                        <Link href={'mailto:email@exemplo.com'} >email@exemplo.com</Link>
                        <p>Endereço</p>
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