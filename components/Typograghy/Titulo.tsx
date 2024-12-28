import React from 'react'

const Title = ( { children }: { children: React.ReactNode }) => {
  return (
    <div>
        <h1 className='text-4xl lg:text-7xl font-extrabold'>
        {children}
        </h1>
    </div>
  )
}

export default Title