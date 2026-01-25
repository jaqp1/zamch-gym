import { useLocation, useOutlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import CarretUp from './assets/caret-arrow-up.png'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'motion/react'


function App() {


  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation()
  const currentOutlet = useOutlet();

  const animations = {
  pageInitial: { opacity: 0, x: 100 },
  pageAnimate: { opacity: 1, x: 0 },
  pageExit:    { opacity: 0, x: -100 }
};

  useEffect(() => {
    const toggleVisibility = () => {
      if(window.scrollY > 400) {
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility)

  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="root-layout  w-full bg-fixed bg-no-repeat bg-[100%_100%]  bg-[length:150%] md:bg-[length:80%] ">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
        key={location.pathname}
        variants={animations}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{duration: 0.4}}
        >
          {currentOutlet}
          <button onClick={scrollToTop} id="backToTop" className={`fixed opacity-0 pointer-events-none md:pointer-events-auto bottom-10 right-20 z-[9999] w-10 h-10 transition-all duration-300 hover:opacity-80 ${isVisible ? `md:opacity-50 md:pointer-events-auto` : `md:opacity-0 md:pointer-events-none`}`}><img src={CarretUp}></img></button>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App
