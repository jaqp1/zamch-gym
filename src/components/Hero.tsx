import React from 'react'
import Button from './Button.js'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10  items-center mt-40 md:mt-45 min-[1000px]:mt-50 justify-start text-center p-4">
        <div className="flex flex-col gap-4 max-w-[900px] w-full mx-auto">
            <p>Pora naładować karabiny</p>
            <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Generator <span className="text-scheme1-700">WIELKICH</span> chłopów</h1>
        </div>
        
        <p className='text-sm md:text-base font-light'>Niniejszym przyjmuję do wiadomośći iż podjęte przeze mnie działania mogą prowadzić do <br/> <span className="text-scheme1-700 font-medium">niewiarygodnego napęcznienia</span> oraz akceptuję ryzyko przyjęcia miana <span className="text-scheme1-700 font-medium">wielkiego chłopa</span></p>
        <Button func={()=>
          window.location.href = '#generate'
        } text={"Akceptuję"}></Button>
    </div>
  )
}
