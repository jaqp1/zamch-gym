

interface ButtonProps {
    text: string;
    func: () => void;
}

export default function Button(props: ButtonProps) {

        const {text, func} = props

        return (
                <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-2 border-scheme1-700 text-scheme1-700 border-solid bg-scheme1-600 shadow-scheme1-shadow duration-200 backdrop-blur-2xl ">
                                <p>{text}</p>
                        </button>
        )
}
