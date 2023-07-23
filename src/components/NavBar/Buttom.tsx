import { IconType, } from "react-icons"

interface ButtomProps {
    label?: string,
    Icon?: IconType,
    type: string,
    size?: string
    onClick?: () => void,
    full?: boolean,
    animate?: boolean

}
const Buttom: React.FC<ButtomProps> = ({ type, label, Icon, size, onClick, full, animate }) => {
    return (
        <button onClick={onClick} className={`flex justify-center gap-2 items-center px-5 py-2 rounded-full  border-2 font-semibold
          cursor-default
        ${type == 'solid' && 'bg-gradient-to-r from-purple-600 to-purple-400 text-white border-transparent'}
        ${type == 'outline' && 'border-purple-600 backdrop-blur-sm text-purple-600'}
        ${full && 'w-full'}
        ${animate && 'hover:scale-105 transition duration-[400] active:scale-95'}
        `}>
            {Icon && <Icon size={20} />}
            <span>{label}</span>
        </button>
    )
}

export default Buttom