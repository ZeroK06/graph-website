import { useEffect, useState } from 'react'
import { Circle, Text } from 'react-konva'
interface NodeProps {
    name?: string,
    x: number,
    y: number,
    fill: string,
    onClick?: () => void
}

const Node: React.FC<NodeProps> = ({ x, y, fill, name, onClick }) => {
    const [color, setColor] = useState('')
    useEffect(() => {
        setColor(fill)
    }, [])

    return (
        <>

            <Text x={x - 7} y={y + 20} text={name} fill='black' />
            <Circle height={25} onMouseMove={onClick} x={x} y={y} fill={color} />
        </>
    )
}

export default Node