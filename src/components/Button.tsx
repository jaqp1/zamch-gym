import React from 'react'

export default function Button(props) {

    const {text, func} = props

    return (
        <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-2 border-scheme1-700 text-scheme1-700 border-solid bg-scheme1-600 shadow-scheme1-shadow duration-200">
                <p>{text}</p>
            </button>
    )
}
