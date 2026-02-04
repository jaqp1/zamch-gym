import SectionWraper from './SectionWraper'
import ExcerciseCard from './ExcerciseCard'

interface Excercise {
  name: string
  type: string
  muscles: string[]
  description: string
  [key: string]: any
}

interface Props {
  workout: Excercise[]
}

export default function Workout(props: Props) {
  const {workout} = props
  return (
    <SectionWraper id={'workout'} /*header={"Uwaga!"} */ title={['Strefa', 'zagrożenia', '']}>
        <div className='flex flex-col gap-4'>
            {workout.map((excercise, i) => {
              return (
                <ExcerciseCard i={i} excercise={excercise} key={i}></ExcerciseCard>
              )
            })}
        </div>
    </SectionWraper>
  )
}
