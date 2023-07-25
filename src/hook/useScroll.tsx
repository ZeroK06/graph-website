import { useState, useEffect } from 'react'

const useScroll = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        const handleScroll = (e) => {
            const delta = e.deltaY > 0 ? 10 : -10;
            console.log(e)
            setX((prevTamanio) => Math.max(prevTamanio + delta, 0))
        }

        document.addEventListener('wheel', handleScroll)
        return () => {
            document.removeEventListener('wheel', handleScroll)
        }
    }, [])
    useEffect(() => {
        console.log(x);

    }, [x])



    return [x, y]
}

export default useScroll