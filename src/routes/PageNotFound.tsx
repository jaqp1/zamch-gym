import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='flex flex-col gap-2'>
        Nic tutaj nie ma mięśniaku: four-o-four
        <Link to="/">Home</Link> 
    </div>
  )
}

export default PageNotFound