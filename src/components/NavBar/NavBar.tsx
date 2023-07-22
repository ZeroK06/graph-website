import { GoPlus, GoLink } from 'react-icons/go'
import Buttom from './Buttom'

const NavBar = () => {

    return (
        <div className='fixed left-0 bottom-0 w-full  z-10'>
            <div className="flex gap-3 py-4 px-4" >
                <Buttom label='Agregar' type='solid' Icon={GoPlus} />
                <Buttom label='Conectar' type='outline' Icon={GoLink} />
            </div>
        </div>
    )
}

export default NavBar