import React from 'react'
import { Group, Line, Text } from 'react-konva'

interface LinkProps {
    name?: string,
    fill?: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    distance: number,
    nodes: Array<string>
}

const Link: React.FC<LinkProps> = ({ name, fromX, fromY, toX, toY, fill, distance }) => {
    const newX = (fromX + toX) / 2
    const newY = (fromY + toY) / 2
    return (
        <Group>
            <Line stroke={fill} strokeWidth={2} points={[fromX, fromY, toX, toY]} />
            <Text x={newX} y={newY} text={String(distance)} fill='white' />
        </Group>
    )
}

export default Link