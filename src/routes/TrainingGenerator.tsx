import { useState } from 'react'
import Hero from '../components/Hero.tsx'
import Generator from '../components/Generator.tsx'
import Workout from '../components/Workout.tsx'
import { generateWorkout } from '../utils/functions'
import bg from '../assets/arnold_conquer_no_sign_bq_final.png'

function TrainingGenerator() {

  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('indywidualny');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('siła');

  function updateWorkout(){
      if(muscles.length < 1){
        return
      }
      const newWorkout = generateWorkout({poison, muscles, goal})
      setWorkout(newWorkout)
      setTimeout(() => { window.location.href = '#workout' }, 1)
  }


  return (
    <section className='min-h-screen flex flex-col  text-white text-sm sm:text-base bg-fixed bg-no-repeat bg-[100%_100%]  bg-[length:150%] md:bg-[length:80%]'  style={{backgroundImage: `url(${bg})`}}>
      <div className='fixed left-0 right-0 top-0 h-32 w-full shadow-[0_10px_60px_40px_rgba(0,0,0,1)] bg-black z-50'></div>
      <Hero></Hero>
      <Generator 
      poison={poison} 
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      ></Generator>
      {workout && (<Workout workout={workout} />)}
    </section>
  )
}

export default TrainingGenerator
