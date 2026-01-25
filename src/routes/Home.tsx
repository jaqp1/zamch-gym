import React from 'react'
import bg from '../assets/IMAGE_20260124_203151_145_black_white.jpg'

function Home() {
  return (
    <section className='min-h-screen bg-cover flex flex-row items-center justify-center text-white bg-fixed bg-no-repeat bg-[50%_100%] md:bg-[0%_0%]'  style={{backgroundImage: `url(${bg})`}}>
      <div className='p-4 rounded-md flex flex-col  gap-4 bg-scheme1-600 sm:flex-wrap backdrop-blur-sm w-100 h-80'></div>
      <div className='absolute left-0 right-0 top-0 h-60 w-full bg-gradient-to-b from-black'></div>
      <div className='absolute left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black'></div>
    </section>
  )
}

export default Home