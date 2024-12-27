import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'

const Menu = () => {
  return (
        <div className='flex flex-col items-center justify-center h-screen space-y-5 '>
            <h1 className='text-7xl font-bold'>Titulo</h1>
            <h2 className='text-4xl font-'>Subtitulo</h2>
            <p>Descrição</p>
            <InteractiveHoverButton text='Fale comigo' className='w-48' />
        </div>
  )
}

export default Menu