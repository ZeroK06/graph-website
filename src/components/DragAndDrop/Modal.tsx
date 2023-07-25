import { GoX } from "react-icons/go"
import Drag from "./Drag"
import useMenu from "../../store/useMenu"

const Modal = () => {
    const { changeActiveDrag } = useMenu()
    return (
        <div className="z-20 backdrop-blur-sm fixed top-0 left-0 h-screen w-full flex justify-center items-center">

            <div className="relative h-80 w-2/5 bg-white p-5 rounded-2xl shadow-md">
                <span onClick={() => changeActiveDrag()} className="absolute top-4 right-4 hover:bg-purple-500 hover:bg-opacity-10 p-1 rounded-full text-purple-500 transition">
                    <GoX size={20} />
                </span>
                <Drag />
            </div>
        </div>
    )
}

export default Modal