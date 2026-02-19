import SectionWraper from './SectionWraper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import { useState } from 'react'
import Button from './Button'
import { motion } from 'motion/react'

interface HeaderProps {
  index: string;
  title: string;
  description: string;
}

function Header({ index, title, description }: HeaderProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-white'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

interface GeneratorProps {
  muscles: string[];
  setMuscles: (m: string[]) => void;
  poison: string;
  setPoison: (p: string) => void;
  goal: string;
  setGoal: (g: string) => void;
  updateWorkout: () => void;
}

export default function Generator(props: GeneratorProps) {

  const [showModal, setShowModal] = useState<boolean>(false);
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
 
  function toggleModal(){
      setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup: string){

    if(muscles.includes(muscleGroup)){
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

      if(muscles.length > 2){
        return
      }

      if(poison !== 'indywidualny'){
        setMuscles([muscleGroup])
        setShowModal(false)
        return
      }

     

      setMuscles([...muscles, muscleGroup])
      if ( muscles.length === 2){
        setShowModal(false)
      }

    
      
  }

  return (
    <SectionWraper  id={'generate'} header={"Wygeneruj swój trening!"} title={['GO BIG', 'OR GO HOME', '']}>
        <Header index={'01'} title={'Podział treningowy'} description={"Wybierz podział treningowy, który najbardziej ci odpowiada."}></Header>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <motion.button 
              onClick={() => {
                setMuscles([])
                setPoison(type)
              }}  
              whileTap={{
                        scale: 0.7,
                        y: 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.5
              }}
              className={`bg-scheme1-600 border-2 px-4 py-3 rounded-lg duration-200 hover:border-scheme1-900 backdrop-blur-2xl ${type === poison ? 'bg-white text-black' : ''}`} key={typeIndex}>

                  <p className='capitalize'>{type.replace(/_/g, " ")}</p>
              </motion.button>
            )
        })}
        </div>
        <Header index={'02'} title={'Partie mięśniowe'} description={"Wybierz interesujące cię partie mięśniowe."}></Header>
        <div className='bg-scheme1-600 border-2 border-solid border-scheme1-700 rounded-lg flex flex-col hover:border-scheme1-800 duration-200 backdrop-blur-2xl'>
            <motion.button onClick={toggleModal} className={`relative flex items-center justify-center p-3 ${muscles.length === 3 ? 'bg-white text-black' : ''}`}>
                <p className='first-letter:uppercase' >{muscles.length === 0 ? 'wybierz partie mięśniowe' : muscles.join(' ')}</p>
                <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
            </motion.button>
            {showModal && (
              <div className='flex flex-col px-3 pb-3'>
                  {(poison === 'indywidualny' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison as keyof typeof WORKOUTS])).map((muscleGroup,muscleGroupIndex) => {
                    return (
                      <motion.button onClick={() => {
                          updateMuscles(muscleGroup)
                      }} key={muscleGroupIndex} className={`hover:text-scheme1-900 text-scheme1-700 duration-200 ${muscles.includes(muscleGroup) ? 'text-scheme1-900' : '' }`}>
                          <p className='uppercase '>{muscleGroup.replace(/_/g, " ")}</p>
                      </motion.button>
                    )
                  })}
              </div>
            )}
        </div>
        <Header index={'03'} title={'Cel'} description={"Zadecyduj na czym chciałbyś skupić się najbardziej"}></Header>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <motion.button 
              onClick={() => {
                setGoal(scheme)
              }}  
              whileTap={{
                        scale: 0.7,
                        y: 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.5
              }}
              className={`bg-scheme1-600 border-2 px-4 py-3 rounded-lg duration-200 hover:border-scheme1-900 backdrop-blur-2xl ${scheme === goal ? 'bg-white text-black' : 'border-scheme1-700'}`} key={schemeIndex}>

                  <p className='capitalize'>{scheme.replace(/_/g, " ")}</p>
              </motion.button>
            )
        })}
        </div>
        <Button func={updateWorkout} text={"Generuj"}></Button>
    </SectionWraper>
    
      
  )
}
