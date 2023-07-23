import { GoPlus, GoLink } from 'react-icons/go'
import Buttom from './Buttom'
import useGraph from '../../store/useGraph'
import toast from 'react-hot-toast'
import Menu from '../MenuDijkstra/Menu'
import useMenu from '../../store/useMenu'
const NavBar = () => {
    const { changeConecte, changeDelete, selectNodes, changeMove } = useGraph()
    const { isActive, changeActive } = useMenu()
    return (
        <div className='fixed left-0 bottom-0 w-full  z-10'>
            <div className="flex  py-4 px-4 justify-between" >
                <div className='flex gap-3' >
                    <Buttom animate label='Agregar' type='solid' Icon={GoPlus} />
                    <Buttom animate label='Conectar' type='outline' Icon={GoLink} onClick={() => {
                        changeConecte()
                        toast.success('Selecciona 2 nodos')
                        console.log(selectNodes);

                    }} />
                </div>
                <div>
                    <Buttom animate label='Metodo dijkstra' type='solid' onClick={() => changeActive()}></Buttom>
                    {isActive && <Menu />}
                </div>
            </div>
        </div>
    )
}

export default NavBar