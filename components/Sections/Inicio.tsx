import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'

const Inicio = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-96 lg:min-h-screen px-4 space-y-6 md:space-y-8 text-center"
      id="inicio"
    >
      {/* Título e subtítulo */}
      <div
        className="flex flex-col items-center justify-center"
      >
        <Titulo>Titulo</Titulo>
        <h2 className="text-2xl md:text-4xl font-semibold">Subtitulo</h2>
      </div>

      {/* Descrição */}
      <p
        className="text-sm md:text-base max-w-xl"
      >
        Descrição
      </p>

      {/* Botão de ação */}
      <Link
        href="#contato"
      >
        <InteractiveHoverButton text="Fale comigo" className="w-44 md:w-48" />
      </Link>
    </div>
  )
}

export default Inicio
