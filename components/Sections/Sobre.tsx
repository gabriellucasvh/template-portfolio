import React from 'react'
import Marquee from '../ui/marquee'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Separator } from '../ui/separator'
import Image from 'next/image'

const Sobre = () => {
    return (
        <div className='px-16'>
            <div className='relative flex w-full flex-col items-center justify-center overflow-hidden bg-background"'>
                <Marquee className="[--duration:10s] w-full">
                    <div className='flex itemscenter justify-center space-x-3'>
                        <h3 className='text-7xl font-bold'>Sobre</h3>
                        <p className='text-blue-500'>•••</p>
                        <h3 className='text-7xl font-semibold'>Sobre</h3>
                        <p className='text-red-500'>•••</p>
                        <h3 className='text-7xl'>Sobre</h3>
                        <p className='text-green-500'>•••</p>
                    </div>
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
            <div className='w-1/2 space-y-2 py-10'>
                <h2 className='text-4xl font-extrabold'>Olá, me chamo Lorem</h2>
                <p
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, optio. Error adipisci voluptates cum illum nemo assumenda, omnis earum velit, repudiandae non, suscipit ex iusto. Corrupti, velit. Eaque, officia natus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam animi aliquid placeat inventore expedita, vero suscipit aspernatur tempore deleniti consectetur nam magnam, odio ipsa exercitationem voluptas quae doloribus quos!
                </p>
            </div>
            <div>
                <ul className='flex flex-col space-y-2 text-xl'>
                    <li className='hover:text-red-500 transition-colors duration-300'>
                        <Link href="https://www.instagram.com" target='_blank' rel='noreferrer noopener'>
                        Instagram
                        <Separator className='w-1/2'/>
                        </Link></li>
                    <li className='hover:text-blue-500 transition-colors duration-300'>
                        <Link href="https://www.facebook.com" target='_blank' rel='noreferrer noopener'>
                        Facebook
                        <Separator className='w-1/2' />
                        </Link></li>
                    <li className='hover:text-green-500 transition-colors duration-300'>
                        <Link href="https://www.whatsapp.com" target='_blank' rel='noreferrer noopener' >
                        Whatsapp
                        <Separator className='w-1/2' />
                        </Link></li>
                </ul>
            </div>
            <div>
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
        </div>
    )
}

export default Sobre