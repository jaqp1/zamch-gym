import React from 'react'
import SectionWraper from './SectionWraper.js'
import { SCHEMES, WORKOUTS } from '../utils/swoldier.js'
import { useState} from 'react'
import Button from './Button.js'


function Header(props){
  const { index, title, description} = props
  return(
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {

  const [showModal, setShowModal] = useState(false);
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
 
  function toggleModal(){
      setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup){

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
    <SectionWraper  id={'generate'} header={"Wygeneruj swój trening!"} title={['“Light weight baby!”']}>
        <Header index={'01'} title={'Podział treningowy'} description={"Wybierz podział treningowy, który najbardziej ci odpowiada."}></Header>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button onClick={() => {
                setMuscles([])
                setPoison(type)
              }}  className={`bg-scheme1-600 border-2 px-4 py-3 rounded-lg duration-200 hover:border-scheme1-900 ${type === poison ? 'border-scheme1-900' : 'border-scheme1-700'}`} key={typeIndex}>

                  <p className='capitalize'>{type.replaceAll('_'," ")}</p>
              </button>
            )
        })}
        </div>
        <Header index={'02'} title={'Partie mięśniowe'} description={"Wybierz interesujące cię partie mięśniowe."}></Header>
        <div className='bg-scheme1-600 border-2 border-solid border-scheme1-700 rounded-lg flex flex-col hover:border-scheme1-800 duration-200'>
            <button onClick={toggleModal} className='relative flex items-center justify-center p-3 '>
                <p className='capitalize'>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
            </button>
            {showModal && (
              <div className='flex flex-col px-3 pb-3'>
                  {(poison === 'indywidualny' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex) => {
                    return (
                      <button onClick={() => {
                          updateMuscles(muscleGroup)
                      }} key={muscleGroupIndex} className={`hover:text-scheme1-900 text-scheme1-700 duration-200 ${muscles.includes(muscleGroup) ? 'text-scheme1-900' : '' }`}>
                          <p className='uppercase '>{muscleGroup.replaceAll('_'," ")}</p>
                      </button>
                    )
                  })}
              </div>
            )}
        </div>
        <Header index={'03'} title={'Określ cel'} description={"Zadecyduj na czym chciałbyś skupić się najbardziej"}></Header>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button onClick={() => {
                setGoal(scheme)
              }}  className={`bg-scheme1-600 border-2 px-4 py-3 rounded-lg duration-200 hover:border-scheme1-900 ${scheme === goal ? 'border-scheme1-900' : 'border-scheme1-700'}`} key={schemeIndex}>

                  <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
              </button>
            )
        })}
        </div>
        <Button func={updateWorkout} text={"Generuj"}></Button>
    </SectionWraper>
    
      
  )
}
