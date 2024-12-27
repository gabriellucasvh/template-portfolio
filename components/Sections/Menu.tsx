import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import Titulo from '../Typograghy/Titulo'

const Menu = () => {
  return (
        <div className='flex flex-col items-center justify-center h-screen space-y-5 '>
            <Titulo>Titulo</Titulo>
            <h2 className='text-4xl font-'>Subtitulo</h2>
            <p>Descrição</p>
            <InteractiveHoverButton text='Fale comigo' className='w-48' />
        </div>
  )
}

export default Menu