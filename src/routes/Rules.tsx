import React from 'react'
import bg from '../assets/IMAGE_20260124_203151_145_black_white.jpg'
import znakOSP from '../assets/znak_zosp.png'
import { motion, useScroll, useTransform } from 'motion/react';


function Rules() {

  const { scrollY, scrollYProgress } = useScroll();
  const logoOpacity = useTransform(scrollYProgress, [0.98,1], [0,1])

  return (
    <section className="w-full bg-black py-36 px-4 md:px-8 text-zinc-300">
      <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="mb-10 text-center border-b border-zinc-700 pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">
            Regulamin Siłowni
          </h2>
          <p className="text-zinc-500">Obowiązuje bezwzględnie każdego</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-500 font-bold">I.</span> Zasady Wstępu
          </h3>
          <ul className="list-decimal list-inside space-y-3 pl-2 marker:text-zinc-500">
            <li>
              <strong className="text-white">Rejestracja wejścia:</strong> Każda osoba korzystająca z siłowni ma <span className="text-red-400 font-bold">bezwzględny obowiązek</span> wpisania się na listę obecności (do zeszytu) niezwłocznie po wejściu. Wpis musi być czytelny i zawierać: datę, godzinę wejścia oraz imię i nazwisko.
            </li>
            <li>
              <strong className="text-white">Obuwie:</strong> Na terenie strefy treningowej obowiązuje całkowity zakaz ćwiczenia w obuwiu zewnętrznym. Wymagane jest czyste obuwie zmienne.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-500 font-bold">II.</span> Porządek 
          </h3>
          <ul className="list-decimal list-inside space-y-3 pl-2 marker:text-zinc-500">
            <li>
              <strong className="text-white">Odkładanie sprzętu:</strong> Po zakończeniu serii ćwiczeń, użytkownik zobowiązany jest do odłożenia talerzy, hantli i gryfów na ich wyznaczone miejsce. Nie zostawiamy obciążenia na maszynach.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-500 font-bold">III.</span> Bezpieczeństwo i Monitoring
          </h3>
          <ul className="list-decimal list-inside space-y-3 pl-2 marker:text-zinc-500">
            <li className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <strong className="text-red-400">Monitoring wizyjny:</strong> Obiekt jest objęty całodobowym monitoringiem. Kamery służą do weryfikacji przestrzegania zasad. <span className="text-zinc-100 font-medium">Każde naruszenie regulaminu (w tym brak obuwia zmiennego, brak wpisu na listę czy niszczenie mienia) jest rejestrowane i archiwizowane.</span>
            </li>
            <li>
              <strong className="text-white">Szanowanie sprzętu:</strong> Zabrania się celowego rzucania hantlami i sztangami o podłogę.
            </li>
            <li>
              <strong className="text-white">Asekuracja:</strong> Ćwiczenia z wolnym ciężarem należy wykonywać przy asekuracji lub z użyciem zabezpieczeń.
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-500 font-bold">IV.</span> Postanowienia Końcowe
          </h3>
          <ul className="list-decimal list-inside space-y-3 pl-2 marker:text-zinc-500">
            <li>Materiał z monitoringu stanowi podstawę do wyciągania konsekwencji wobec osób łamiących zasady.</li>
            <li>Osoby uporczywie naruszające regulamin zostaną pozbawione prawa wstępu.</li>
            <li>Ćwiczący korzystają ze sprzętu na własną odpowiedzialność.</li>
          </ul>
        </div>

      </div>
       <div className='fixed left-0 right-0 top-0 pointer-events-none h-60 w-full bg-gradient-to-b from-black z-50 '></div>
      <div 
        className='fixed flex flex-row items-end left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black z-50 p-5 pointer-events-none'
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
    </section>
  )
}

export default Rules