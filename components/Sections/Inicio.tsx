import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'

const Inicio = () => {
  return (
        <div className='flex flex-col items-center justify-center h-screen space-y-5' id='inicio'>
          <div className='flex flex-col items-center justify-center' data-aos="fade-up">
            <Titulo>Titulo</Titulo>
            <h2 className='text-4xl font-'>Subtitulo</h2>
          </div>
            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Descrição</p>
            <Link href={'#contato'} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <InteractiveHoverButton text='Fale comigo' className='w-48' />
            </Link>
        </div>
  )
}

export default Inicio