import React, { useEffect, useState } from 'react'

const usePositionMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect(() => {
        const mouseClick = (e) => {
            setX(e.clientX)
            setY(e.clientY)
        }
        window.addEventListener('mousemove', mouseClick)
        return () => {
            window.removeEventListener('mousemove', mouseClick)
        }
    }, [])

    return [x, y]
}

export default usePositionMouse