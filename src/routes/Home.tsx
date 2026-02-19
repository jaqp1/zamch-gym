import { useEffect, useRef, useState } from 'react'
import bg from '../assets/IMAGE_20260124_203151_145_black_white.jpg'
import { motion, useScroll, useTransform} from 'motion/react'
import downArrow from '../assets/arrow_down.png'
import rightArrow from '../assets/arrow_right.png'
import znakOsp from '../assets/znak_zosp.png'
import { NavLink } from 'react-router-dom'
import wandale from '../assets/Klip wideo bez tytułu ‐ Wykonano za pomocą Clipchamp.mp4'
import tearedPhoto from '../assets/mariusz.jpg'

function Home() {

  const { scrollY, scrollYProgress } = useScroll();
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
        block: 'start'
      });
  };

  const logoOpacity = useTransform(scrollYProgress, [0.98,1], [0,1])

    


  return (
    <section className='sticky flex flex-col items-center justify-center text-white'  >
      <div 
        className='fixed top-0 left-0 w-full h-full -z-10'
        style={{backgroundImage: `url(${bg})`}}>
          <img
            src={bg}
            alt="Background"
            className='w-full h-full object-cover'
          ></img>
      </div>
      <motion.div className='p-4 absolute inset-0 z-10  rounded-md flex flex-col  gap-4 sm:flex-wrap backdrop-blur-md w-full h-full' style={{ opacity: blurOpacity}}>
      </motion.div>
      <div className='p-4 absolute inset-0 z-9 pointer-events-none w-full h-full bg-black opacity-50' >
      </div>
      <div className='w-full min-h-screen flex flex-col px-10 items-center justify-start pt-60 z-50'>
        <div className={`h-auto mb-10 w-auto duration-300 ${isVisible ? ` md:pointer-events-auto` : `opacity-0 md:pointer-events-none`}`}>
          <h1 className="font-black uppercase italic leading-tight drop-shadow-xl">
            <span className="block text-3xl md:text-5xl text-white">
              Twoja sportowa
            </span>
            <span className="block text-5xl md:text-8xl bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent my-1">
              PRZYGODA
            </span>
            <span className="block text-2xl md:text-4xl text-white">
              zaczyna się tutaj
            </span>
          </h1>
        </div>
        <button onClick={scrollToSection} className={`my-auto relative duration-300  ${isVisible ? ` md:pointer-events-auto` : `opacity-0 md:pointer-events-none`}`}>
            <img src={downArrow}  className='w-20 pointer-events-auto '></img>
        </button>
      </div>    
      <div 
  ref={secondSectionRef} 
  className='scroll-mt-20 w-full flex flex-col md:flex-row gap-8 md:gap-16 p-8 z-50 min-h-screen my-auto pointer-events-auto md:mt-15 md:py-20 items-center justify-center'
>
    {/* LEWA STRONA: OBRAZEK */}
    {/* Ustawiamy szerokość na 100% na mobile i np. 50% na desktopie */}
    <div className='w-full md:w-1/3 flex justify-center md:justify-start'>
        <img
          src={tearedPhoto}
          alt="Siłownia"
          className="w-full h-auto opacity-0 md:opacity-100 object-cover rounded-xl shadow-lg" 
        />
        </div>
        <div className='flex flex-col w-full md:w-1/2'>
          <h2 className='text-3xl font-semibold'>Witamy na naszej siłowni!</h2>
          <h3 className='text-gray-400 text-sm mt-4 mb-2'>
              Jedyne takie miejsce w okolicy. Stworzone przez mieszkańców - dla mieszkańców. Bez karnetów, bez zbędnych formalności - po prostu przyjdź i trenuj
          </h3>
          
          <p className='text-sm text-gray-400 mb-6'>
              Na naszej siłowni każdy znajdzie coś dla siebie. Niezależnie od tego czy chcesz zostać mistrzem trójboju czy po prostu chcesz na chwilę odejść od komputera i rozruszać organizm. U nas znajdziesz sprzęt, który sprosta twoim wymaganiom.
          </p>
          
          <NavLink to='/about' className='bg-white rounded-2xl text-black justify-center p-2 px-6 flex flex-row gap-2 font-semibold w-full md:w-auto self-start hover:bg-gray-200 transition-colors'>
              O siłowni
              <img src={rightArrow} className='w-5' alt="strzałka" />
          </NavLink>
        </div>
      </div>

      <div className='w-full flex flex-col p-8 z-50 min-h-screen my-auto md:px-24 lg:px-40 md:justify-center'>
  
  {/* NAGŁÓWEK GŁÓWNY */}
  <h2 className='self-start text-3xl font-semibold md:text-5xl md:mb-12'>
    Aktualności
  </h2>
  
  <br className="md:hidden" />
  <div className="flex flex-col md:flex-row md:gap-16 md:items-start">
    <div className="w-full md:w-1/2">
      <h3 className='text-white text-sm md:hidden mb-4'>
        Skandaliczny wybryk <br /> dwóch szczurasów
      </h3>

      <div className="relative overflow-hidden rounded-lg md:rounded-2xl shadow-none md:shadow-2xl md:shadow-white/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className='-z-10 w-full object-cover aspect-video'
        >
          <source src={wandale} type="video/mp4" />
          Nieobsługiwane video
        </video>
      </div>
    </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className='hidden md:block text-white text-3xl font-bold mb-6 leading-tight'>
          Skandaliczny wybryk <br/> dwóch szczurasów
        </h3>

        <p className='text-xs mt-5 text-gray-400 mb-20 md:text-base md:text-gray-300 md:leading-relaxed lg:text-sm'>
          26 stycznia 2026 doszło do skandalicznego wybryku. Dwóch odważnych osiłków postanowiło podziękować za możliwość treningu na siłowni zmazując napisany odręcznie na tablicy regulamin. Oczywiście nie pochwalamy takich zachowań. Administratorzy siłowni skontaktują się z rodzicami widocznych na nagraniu wandali a sami wandale mają zakaz wstępu na siłownię na czas nieokreślony.
        </p>
      </div>

      </div>
    </div>
      <div className='fixed left-0 right-0 top-0 pointer-events-none h-60 w-full bg-gradient-to-b from-black z-50 '></div>

      <div className='fixed flex flex-row items-end left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black z-50 p-5 md:p-10 pointer-events-none'>
        <motion.div
          className='flex flex-row w-full items-end'
          style={{ opacity: logoOpacity }}
        >
          <img className='w-10 md:w-16' src={znakOsp} alt="Logo OSP" /> 
          
          <p className='text-gray-400 font-semibold text-xs p-3 md:text-sm md:ml-2'>
            OSP Zamch
          </p>
          
          <p className='text-gray-400 text-right font-semibold text-xs justify-end ml-auto '>
            © 2026 Wszelkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Home