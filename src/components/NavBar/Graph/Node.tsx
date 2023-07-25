import { useEffect, useState } from 'react'
import { Circle, Text, Group } from 'react-konva'
import useGraph from '../../../store/useGraph'
import distance from '../../../utils/distancePoints'
interface NodeProps {
    id: string,
    name: string,
    x: number,
    y: number,
    fill: string,
}

const Node: React.FC<NodeProps> = ({ id, x: positionX, y: positionY, fill, name }) => {

    const [color, setColor] = useState('')
    const { updateNodePosition, arrLinks, removeLink, updateLinkPosition, isConecte, isDelete, addSelectNode, removeNode, changeConecte, isMove, changeDelete, changeMove, changeNew } = useGraph()

    const handleMove = (e) => {
        if (isMove) {
            const a = arrLinks.filter(link => link.nodes.includes(name))
            a.forEach(link => {
                const distance1 = distance({ x1: link.toX, y1: link.toY, x2: e.target.attrs.x, y2: e.target.attrs.y })
                const distance2 = distance({ x1: link.fromX, y1: link.fromY, x2: e.target.attrs.x, y2: e.target.attrs.y })

                if (link.nodeEnd == name) updateLinkPosition(link.id, { toX: positionX, toY: positionY, distance: distance2 })
                if (link.nodeStart == name) updateLinkPosition(link.id, { fromX: positionX, fromY: positionY, distance: distance1 })
            })
            updateNodePosition(id, { x: e.target.attrs.x, y: e.target.attrs.y })
        }
    }

    const handleConecte = () => {
        if (isConecte) {
            addSelectNode(id)
            changeNew(false)
        }
    }
    const handleDelete = () => {
        if (isDelete) {
            removeNode(id)
            removeLink(name)
            changeDelete(false)
        }
    }


    useEffect(() => {
        setColor(fill)
    }, [])

    return (
        <Group x={positionX} y={positionY} onClick={() => {
            handleConecte()
            handleDelete()
        }} draggable={isMove} onDragMove={handleMove} >
            <Circle height={20} fill={fill} />
            <Text x={-5} y={-5} text={name} fill='white' fontSize={10} fontVariant='700' />
            <Text x={10} y={10} text={`(${positionX}, ${positionY})`} fill='white' />
        </Group>
    )
}

export default Node