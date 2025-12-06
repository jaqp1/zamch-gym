import React from 'react'
import SectionWraper from './SectionWraper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
    <SectionWraper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
        <div className='flex flex-col gap-4'>
            {workout.map((excercise, i) => {
              return (
                <ExcerciseCard i={i} excercise={excercise} key={i}> vsdfvadva</ExcerciseCard>
              )
            })}
        </div>
    </SectionWraper>
  )
}
