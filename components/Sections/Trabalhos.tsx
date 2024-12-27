import React from 'react'
import Titulo from '../Typograghy/Titulo'
import Image from 'next/image'

const Trabalhos = () => {
  return (
    <div className='px-20 h-screen'>
      <div className='flex items-center justify-between py-10'>
        <Titulo>Trabalhos</Titulo>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui, similique, facilis excepturi placeat libero </p>
      </div>
      <div className='space-y-10 py-5'>
        {/* case 1 */}
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/IMAGEMx.png"
              className="border shadow rounded-lg"
              alt="case1"
              width={650}
              height={500}
            />
          </div>
          <div className="w-1/2 space-y-4">
            <h2 className="text-5xl font-bold">Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto
              inventore accusamus unde minus veniam itaque
            </p>
            <p className="inline-block bg-neutral-950 text-white px-4 py-2 rounded-full">
              Tipo do serviço
            </p>
          </div>
        </div>
        {/* case 2 */}
        <div className="flex items-center justify-between">
          <div className="w-1/2 space-y-4">
            <h2 className="text-5xl font-bold">Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto
              inventore accusamus unde minus veniam itaque
            </p>
            <p className="inline-block bg-neutral-950 text-white px-4 py-2 rounded-full">
              Tipo do serviço
            </p>
          </div>
          <div>
            <Image
              src="/IMAGEMx.png"
              className="border shadow rounded-lg"
              alt="case1"
              width={650}
              height={500}
            />
          </div>
        </div>
        {/* case 3 */}
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/IMAGEMx.png"
              className="border shadow rounded-lg"
              alt="case1"
              width={650}
              height={500}
            />
          </div>
          <div className="w-1/2 space-y-4">
            <h2 className="text-5xl font-bold">Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto
              inventore accusamus unde minus veniam itaque
            </p>
            <p className="inline-block bg-neutral-950 text-white px-4 py-2 rounded-full">
              Tipo do serviço
            </p>
          </div>
        </div>
        {/* case 4 */}
        <div className="flex items-center justify-between">
          <div className="w-1/2 space-y-4">
            <h2 className="text-5xl font-bold">Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto
              inventore accusamus unde minus veniam itaque
            </p>
            <p className="inline-block bg-neutral-950 text-white px-4 py-2 rounded-full">
              Tipo do serviço
            </p>
          </div>
          <div>
            <Image
              src="/IMAGEMx.png"
              className="border shadow rounded-lg"
              alt="case1"
              width={650}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trabalhos