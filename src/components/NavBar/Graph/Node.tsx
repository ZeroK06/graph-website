import { useEffect, useState } from 'react'
import { Circle, Text, Group } from 'react-konva'
import useGraph from '../../../store/useGraph'
interface NodeProps {
    id: string,
    name: string,
    x: number,
    y: number,
    fill: string,
}

const Node: React.FC<NodeProps> = ({ id, x: positionX, y: positionY, fill, name }) => {
    const [color, setColor] = useState('')
    const { updateNodePosition, arrLinks, updateLinkPosition } = useGraph()
    const handleMove = (e) => {
        const a = arrLinks.filter(link => link.nodes.includes(name))
        a.forEach(link => {
            const distance = Number(Math.sqrt((Math.abs((link.fromX - positionX)) ^ 2) + (Math.abs((link.fromY - positionY) ^ 2))).toFixed(2))
            if (link.nodeEnd == name) updateLinkPosition(link.id, { toX: positionX, toY: positionY, distance })
            if (link.nodeStart == name) updateLinkPosition(link.id, { fromX: positionX, fromY: positionY, distance })
        })
        updateNodePosition(id, { x: e.target.attrs.x, y: e.target.attrs.y })
    }
    useEffect(() => {
        setColor(fill)
    }, [])

    return (
        <Group x={positionX} y={positionY} draggable onDragMove={handleMove} >
            <Circle height={25} fill={color} />
            <Text x={-5} y={-5} text={name} fill='white' fontSize={12} fontVariant='700' />
        </Group>
    )
}

export default Node