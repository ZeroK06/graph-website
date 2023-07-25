import useMenu from '../../store/useMenu'
import Modal from './Modal'

const Launcher = () => {

    const { isActiveDrag } = useMenu()

    return (
        <>
            {isActiveDrag && <Modal />}
        </>
    )
}

export default Launcher