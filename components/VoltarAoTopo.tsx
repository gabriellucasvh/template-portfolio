"use client"
import { ChevronUpIcon } from 'lucide-react'
import React from 'react'

const VoltarAoTopo = () => {
  return (
        <div>
            <button className='fixed bottom-4 left-4 z-50 bg-white rounded-full shadow-lg border border-black/5' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                <ChevronUpIcon className="text-black w-14 h-14" />
            </button>
        </div>
  )
}

export default VoltarAoTopo