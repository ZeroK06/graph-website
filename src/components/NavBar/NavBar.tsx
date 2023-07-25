import { GoGitCommit, GoGitMerge, GoXCircle, GoSkip, GoSkipFill, GoUpload, GoFileCode } from 'react-icons/go'
import Buttom from './Buttom'
import useGraph from '../../store/useGraph'
import toast from 'react-hot-toast'
import Menu from '../MenuDijkstra/Menu'
import useMenu from '../../store/useMenu'
const NavBar = () => {
    const { changeConecte, changeDelete, selectNodes, changeMove, changeNew, isMove, arrLinks, arrNodes } = useGraph()
    const { isActive, changeActive, changeActiveDrag } = useMenu()
    return (
        <div className='fixed left-0 bottom-0 w-full  z-10'>
            <div className="flex  py-4 px-4 justify-between" >
                <div className='flex gap-3' >
                    <Buttom animate label='Agregar' type='solid' Icon={GoGitCommit} onClick={() => {
                        changeNew(true)
                        toast.success('Presiona doble click para crear')
                    }} />
                    <Buttom animate label='Eliminar' type='outline' Icon={GoXCircle} onClick={() => {
                        changeDelete(true)
                        toast.success('Seleciona un nodo para eliminar')
                    }} />
                    <Buttom animate label='Conectar' type='outline' Icon={GoGitMerge} onClick={() => {
                        changeConecte(true)
                        toast.success('Selecciona 2 nodos')
                    }} />
                    <Buttom animate label='Mover' type='outline' Icon={!isMove ? GoSkip : GoSkipFill} onClick={() => {
                        changeMove()
                        toast.success('Puedes mover los nodos')
                    }} />
                    <Buttom animate label='Subir imagen' type='outline' Icon={GoUpload} onClick={() => {
                        changeActiveDrag()
                    }} />
                    <Buttom animate label='Exportar' type='outline' Icon={GoFileCode} onClick={() => {
                        console.log(arrNodes, arrLinks)
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