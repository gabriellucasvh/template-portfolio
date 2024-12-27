import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='px-20 pt-10 bg-neutral-950 text-white '>
            <div className='flex items-center justify-between'>
                <div>
                    <Image src="/IMAGEMx.png" className='border shadow ' alt="logo" width={100} height={100} />
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href={'#inicio'}>Início</Link>
                        </li>
                        <li>
                            <Link href={'#sobre'}>Sobre</Link>
                        </li>
                        <li>
                            <Link href={'#servicos'}>Serviços</Link>
                        </li>
                        <li>
                            <Link href={'#trabalhos'}>Trabalhos</Link>
                        </li>
                        <li>
                            <Link href={'#contato'}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href={'https://www.instagram.com/'} target='_blank'>Instagram</Link>
                        </li>
                        <li>
                            <Link href={'https://www.facebook.com/'} target='_blank'>Facebook</Link>
                        </li>
                        <li>
                            <Link href={'https://www.linkedin.com/'} target='_blank'>Linkedin</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center py-4'>
                <p>Feito por <Link href={'https://github.com/gabriellucasvh'} className='underline hover:text-blue-500 transition-colors duration-300' target='_blank'>Gabriel</Link> • Copyright &copy; 2023. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer