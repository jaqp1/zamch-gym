import {useRef} from 'react'
import { useScroll, useTransform, motion } from 'motion/react';
import silkaVideo from '../assets/copy_DD45A750-9AB1-407D-9E01-E083DB147BE6.mp4'
import cross from '../assets/crossfit.png'
import cardio from '../assets/cardio.jpg'
import wolneCiezary from '../assets/wolne_ciezary.jpg'
import street from '../assets/street.jpg'
import znakOSP from '../assets/znak_zosp.png'

function About() {
  const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(scrollYProgress, [0.98,1], [0,1])

  const secondSectionRef = useRef<HTMLDivElement>(null);


    


  return (
    <section className='min-h-svh sticky bg-cover bg-center flex flex-col items-center justify-center text-white bg-no-repeat'  >
      
      <motion.div className='p-4 absolute inset-0 z-10  rounded-md flex flex-col  gap-4 sm:flex-wrap backdrop-blur-md w-full h-full' >
      </motion.div>
      <div className='p-4 absolute inset-0 z-9  w-full h-full bg-black opacity-50' >
      </div>
      <div ref={secondSectionRef} className='w-full justify-end pb-10 flex flex-col z-50 min-h-screen my-auto bg-cover bg-no-repeat'>
        <div className='fixed left-0 right-0 top-0 h-60 w-full bg-linear-to-b from-black z-50'></div>
        <h2 className='text-white mx-7 text-3xl font-semibold z-30'>O siłowni</h2><br />
        <h3 className='text-gray-300 text-xs mx-7 z-30'>Nasza siłownia powstała z inicjatywy mieszkańców i służy nam wszystkim. To przestrzeń, w której liczy się dobry trening i przyjazna atmosfera. Przychodzisz, robisz swoje i czujesz się jak u siebie. Zgromadziliśmy sprzęt, który pozwoli Ci wykonać kompleksowy trening - od budowania siły po żelazną kondycję.</h3>
        {/* <p className='white text-xs m-5 z-30'>
        Cenimy porządek i kulturę, tak więc jedyne wymaganie, które przed tobą stoi na początku przygody na siłownik to abyś utrzymywał porządek, sprzątał po sobie oraz zachowywał kulturę osobistą w trakcie treningu.
        </p> */}
        {/* <img src={silkaVideo} className='absolute left-0 top-0 z-0 h-screen'></img> */}
        <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute inset-0 h-screen  object-cover -z-10'
      >
        <source src={silkaVideo} type="video/mp4" />
        Nieobsługiwane video
      </video>
        {/* <div className='fixed left-0 right-0 bottom-0 h-120 w-full bg-linear-to-t from-black z-20'></div> */}
      </div>
      <div className='min-h-screen bg-zinc-900 w-full gap-2 z-20 flex flex-col py-5 text-black'>
        <h1 className='mx-5 mt-8 text-2xl font-semibold text-white'>Poznaj naszą siłownię </h1>
        <h2 className='mx-5 text-md font-semibold text-zinc-500 mb-8'>Mamy wszystko, co potrzebne, żeby zrobić formę życia.</h2>
        <div className='relative h-120 m-5 rounded-2xl bg-cover flex flex-col items-start justify-end ' style={{backgroundImage: `url(${wolneCiezary})`}}>
          <h2 className='text-white z-30 px-5 text-2xl font-semibold'>Wolne ciężary</h2>
          <ol className='text-xs m-5 text-white z-30'>
            <li>Obciążenia typu bumper</li>
            <li>Sztangi olimpijskie</li>
            <li>Ławki treninogowe</li>
            <li>Stojaki na sztangę</li>
            <li>Zestaw regulowanych hantli</li>
          </ol>
          {/* <img src={classic}></img> */}
          <div className='absolute left-0 bottom-0 w-full h-40 bg-linear-to-t rounded-b-2xl from-black'></div>
        </div>
        <div className='relative h-120 m-5 rounded-2xl bg-cover flex flex-col items-start justify-end ' style={{backgroundImage: `url(${cardio})`}}>
          <h2 className='text-white z-30 px-5 text-2xl font-semibold'>Strefa cardio</h2>
          <ol className='text-xs m-5 text-white z-30'>
            <li>Bieżnia</li>
            <li>Orbitrek</li>
            <li>Rowerek stacjonarny</li>
            <li>Skakanki</li>
          </ol>
          {/* <img src={classic}></img> */}
          <div className='absolute left-0 bottom-0 w-full h-40 bg-linear-to-t rounded-b-2xl from-black'></div>
        </div>
        <div className='relative h-120 m-5 rounded-2xl bg-cover flex flex-col items-start justify-end ' style={{backgroundImage: `url(${cross})`}}>
          <h2 className='text-white z-30 px-5 text-2xl font-semibold'>CrossFit & Trening Funkcjonalny</h2>
          <ol className='text-xs m-5 text-white z-30'>
            <li>Brama treningowa</li>
            <li>Opona treningowa</li>
            <li>Linia battle rope</li>
            <li>Kamizelka obciążeniowa</li>
            <li>Zestaw gum oporowych</li>
            <li>Lina</li>
          </ol>
          {/* <img src={classic}></img> */}
          <div className='absolute left-0 bottom-0 w-full h-40 bg-linear-to-t rounded-b-2xl from-black'></div>
        </div>
        <div className='relative h-120 m-5 rounded-2xl bg-cover flex flex-col items-start justify-end mb-25' style={{backgroundImage: `url(${street})`}}>
          <h2 className='text-white z-30 px-5 text-2xl font-semibold'>Street Workout & Kalistenika </h2>
          <ol className='text-xs m-5 text-white z-30'>
            <li>Dwa stanowiska do dipów</li>
            <li>Drążki w różnych konfiguracjach</li>
          </ol>
          {/* <img src={classic}></img> */}
          <div className='absolute left-0 bottom-0 w-full h-40 bg-linear-to-t rounded-b-2xl from-black'></div>
        </div>
      </div>
    <div 
        className='fixed flex flex-row items-end left-0 right-0 bottom-0 h-40 w-full bg-linear-to-t from-black z-50 p-5 pointer-events-none'
        >
          <motion.div
          className='flex flex-row w-full items-end'
          style={{
            opacity: logoOpacity
          }}
          >
            <img className='w-10' src={znakOSP}></img>
            <p className='text-gray-400 font-semibold text-xs p-3'>
              OSP Zamch
            </p>
            <p className='text-gray-400 font-semibold text-xs p-3 justify-end ml-auto'>
              © 2026 Wszelkie prawa zastrzeżone.
            </p>
          </motion.div>
          
      </div>
     
      
      
      {/* <div className="h-[200vh] w-full"></div> */}
    </section>
  )
}

export default About