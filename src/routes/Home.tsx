import React from 'react'
import bg from '../assets/IMAGE_20260124_203151_145_black_white.jpg'
import { motion, useScroll, useTransform} from 'motion/react'

function Home() {

  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0,300], [0,1]);

  return (
    <section className='min-h-screen sticky bg-cover flex flex-row items-center justify-center text-white bg-fixed bg-no-repeat bg-[50%_100%] md:bg-[0%_0%]'  style={{backgroundImage: `url(${bg})`}}>
      
      <motion.div className='p-4 absolute inset-0 z-10  rounded-md flex flex-col  gap-4 sm:flex-wrap backdrop-blur-md w-full h-full' style={{ opacity: blurOpacity}}>
      </motion.div>
      <div className='p-4 absolute inset-0 z-9  w-full h-full bg-black opacity-20' >
      </div>
        <div className='absolute top-0 z-10 w-full min-h-screen flex flex-row p-10 justify-center items-center '>
          <div className='self-start h-auto w-auto'>
            <h1 className='text-5xl text-left font-semibold'>Twoja sportowa przygoda zaczyna się tutaj</h1>
          </div>
        </div>        
      <div className='fixed left-0 right-0 top-0 h-60 w-full bg-gradient-to-b from-black z-50'></div>
      <div className='fixed left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black z-50'></div>
      <div className="h-[200vh] w-full"></div>
    </section>
  )
}

export default Home