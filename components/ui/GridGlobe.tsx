import React from 'react'

const GridGlobe = () => {
  return (
    <div className='w-full h-full'>
        <video 
        className='w-full object-cover object-left-top  absolute top-0 left-0 h-full'
        autoPlay loop muted 
        src="/globe.mp4"></video>
    </div>
  )
}

export default GridGlobe