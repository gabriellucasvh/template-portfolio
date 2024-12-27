import React from 'react'
import InteractiveHoverButton from '../ui/interactive-hover-button'
import Titulo from '../Typograghy/Titulo'
import Link from 'next/link'

const Inicio = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 space-y-6 md:space-y-8 text-center"
      id="inicio"
    >
      {/* Título e subtítulo */}
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <Titulo>Titulo</Titulo>
        <h2 className="text-2xl md:text-4xl font-semibold">Subtitulo</h2>
      </div>

      {/* Descrição */}
      <p
        className="text-sm md:text-base max-w-md"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Descrição
      </p>

      {/* Botão de ação */}
      <Link
        href="#contato"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <InteractiveHoverButton text="Fale comigo" className="w-40 md:w-48" />
      </Link>
    </div>
  )
}

export default Inicio
