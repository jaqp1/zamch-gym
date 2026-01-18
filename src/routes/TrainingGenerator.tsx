import { useState } from 'react'
import Hero from '../components/Hero.tsx'
import Generator from '../components/Generator.tsx'
import Workout from '../components/Workout.tsx'
import { generateWorkout } from '../utils/functions'

function App() {

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
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-scheme1-400 to-scheme1-600 text-white text-sm sm:text-base'>
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
    </main>
  )
}

export default App
