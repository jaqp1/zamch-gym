import React from 'react'

export default function SectionWraper(props) {
    const {children, header, title, id} = props
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10 ">
        <div className='bg-scheme1-600 py-10 flex flex-col gap-2 justify-center items-center p-4'>
            <p>{header}</p>
            <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center'><span>{title[0]}</span> <br/><span className='uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl text-scheme1-700 text-center'>{title[1]}</span> <span>{title[2]}</span></h2>

        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>
            {children}
        </div>

    </section>
  )
}
