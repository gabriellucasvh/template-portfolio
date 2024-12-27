import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'

const Inicio = () => {
  return (
        <div className='flex flex-col items-center justify-center h-screen space-y-5' id='inicio'>
            <Titulo>Titulo</Titulo>
            <h2 className='text-4xl font-'>Subtitulo</h2>
            <p>Descrição</p>
            <Link href={'#contato'}>
            <InteractiveHoverButton text='Fale comigo' className='w-48' />
            </Link>
        </div>
  )
}

export default Inicio