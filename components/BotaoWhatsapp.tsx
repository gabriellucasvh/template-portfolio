import Image from 'next/image'
import React from 'react'

const BotaoWhatsapp = () => {
    return (
        <div>
            <button className='fixed bottom-4 right-4 z-50  shadow-lg rounded-full shadow-black/35 animate-bounce'>
                <Image src="/whatsapp.svg"  alt="whatsapp" width={50} height={50} />
            </button>
        </div>
    )
}

export default BotaoWhatsapp