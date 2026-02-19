import { motion } from 'motion/react'

interface ButtonProps {
    text: string;
    func: () => void;
}

export default function Button(props: ButtonProps) {

        const {text, func} = props

        return (
                <motion.button 
                onClick={func} 
                className="px-8 py-4 mx-auto rounded-md border-2 border-scheme1-700 text-scheme1-700 border-solid bg-scheme1-600 duration-200 backdrop-blur-2xl hover:"
                animate={{
                        scale: [1, 1.1, 1, 1.1, 1, 1, 1]
                }}
                transition={{
                        duration: 1.5,
                        repeat: Infinity,
                }}
                >
                        <p>{text}</p>
                </motion.button>
        )
}
