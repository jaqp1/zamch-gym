import React, { useEffect, useState } from 'react'
import bg from '../assets/IMAGE_20260124_203151_145_black_white.jpg'
import { motion, useScroll, useTransform} from 'motion/react'
import downArrow from '../assets/arrow_down.png'
import { useLocation } from 'react-router-dom';

function Home() {

  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0,300], [0,1]);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation()

   useEffect(() => {
      const toggleVisibility = () => {
        if(window.scrollY < 800) {
          setIsVisible(true);
        }else{
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => window.removeEventListener('scroll', toggleVisibility)
  
    }, []);

    const scrollToBottom = () => {
    window.scrollTo({
      top: 950,
      behavior: 'smooth'
    });
  };

    


  return (
    <section className='min-h-screen sticky bg-cover flex flex-col items-center justify-center text-white bg-fixed bg-no-repeat bg-[50%_100%] md:bg-[0%_0%]'  style={{backgroundImage: `url(${bg})`}}>
      
      <motion.div className='p-4 absolute inset-0 z-10  rounded-md flex flex-col  gap-4 sm:flex-wrap backdrop-blur-md w-full h-full' style={{ opacity: blurOpacity}}>
      </motion.div>
      <div className='p-4 absolute inset-0 z-9  w-full h-full bg-black opacity-50' >
      </div>
      <div className='w-full min-h-screen flex flex-col p-10 items-center justify-center z-50'>
        <div className={`h-auto w-auto my-auto  duration-300 ${isVisible ? ` md:pointer-events-auto` : `opacity-0 md:pointer-events-none`}`}>
          <h1 className='text-4xl text-center font-semibold'>Twoja sportowa przygoda <br />zaczyna się tutaj</h1>
        </div>
        <button onClick={scrollToBottom} className={`relative duration-300  ${isVisible ? ` md:pointer-events-auto` : `opacity-0 md:pointer-events-none`}`}>
            <img src={downArrow}  className='w-20 pointer-events-auto '></img>
        </button>
      </div>    
      <div className='w-full flex flex-col p-10 z-50 min-h-screen my-auto'>
        <h2 className='self-start mt-70 text-3xl font-semibold'>Witamy na naszej siłowni!</h2><br />
        <h3 className='text-gray-400 text-sm'>Jedyne takie miejsce w okolicy. Stworzone przez mieszkańców - dla mieszkańców. Bez karnetów, bez zbędnych formalności – po prostu przyjdź i trenuj</h3><br />
        <p className='text-sm text-gray-400'>Na naszej siłowni każdy znajdzie coś dla siebie. Niezależnie od tego czy chcesz zostać mistrzem trójboju czy po prostu chcesz na chwilę odejsć od komputera i rozruszać organizm. U nas znajdziesz sprzęt, który sprosta twoim wymaganiom.</p>
      </div>
      <div className='fixed left-0 right-0 top-0 h-60 w-full bg-gradient-to-b from-black z-50'></div>
      <div className='fixed left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black z-40'></div>
      <div className="h-[200vh] w-full"></div>
    </section>
  )
}

export default Home