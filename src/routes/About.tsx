import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/arnold_conquer_no_sign_bq_final.png'
import { NavLink, useLocation } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'motion/react';
import porshe from '../assets/porshe.gif'

function About() {
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0,300], [0,1]);
  const [isVisible, setIsVisible] = useState(true);

  const secondSectionRef = useRef<HTMLDivElement>(null);

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

    const scrollToSection = () => {
      secondSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
  };

    


  return (
    <section className='min-h-screen sticky bg-cover bg-center flex flex-col items-center justify-center text-white bg-no-repeat'  >
      
      <motion.div className='p-4 absolute inset-0 z-10  rounded-md flex flex-col  gap-4 sm:flex-wrap backdrop-blur-md w-full h-full' style={{ opacity: blurOpacity}}>
      </motion.div>
      <div className='p-4 absolute inset-0 z-9  w-full h-full bg-black opacity-50' >
      </div>
      <div ref={secondSectionRef} className='w-full justify-end pb-10 flex flex-col z-50 min-h-screen my-auto bg-cover bg-no-repeat'>
        <div className='fixed left-0 right-0 top-0 h-60 w-full bg-gradient-to-b from-black z-50'></div>
        <h2 className='text-white mx-7 text-3xl font-semibold z-30'>O siłowni</h2><br />
        <h3 className='text-gray-300 text-xs mx-7 z-30'>Nasza siłownia powstała z inicjatywy mieszkańców i służy nam wszystkim. To przestrzeń, w której liczy się dobry trening i przyjazna atmosfera. Przychodzisz, robisz swoje i czujesz się jak u siebie. Zgromadziliśmy sprzęt, który pozwoli Ci wykonać kompleksowy trening – od budowania siły po żelazną kondycję.</h3>
        {/* <p className='white text-xs m-5 z-30'>
        Cenimy porządek i kulturę, tak więc jedyne wymaganie, które przed tobą stoi na początku przygody na siłownik to abyś utrzymywał porządek, sprzątał po sobie oraz zachowywał kulturę osobistą w trakcie treningu.
        </p> */}
        <img src={porshe} className='absolute left-0 top-0 z-0 h-screen'></img>
        <div className='fixed left-0 right-0 bottom-0 h-120 w-full bg-linear-to-t from-black z-20'></div>
      </div>
    
     
      
      
      {/* <div className="h-[200vh] w-full"></div> */}
    </section>
  )
}

export default About