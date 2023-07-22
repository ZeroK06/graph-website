import { Stage, Layer } from 'react-konva';
import Node from './Node';
import Map from './Map';
import { useEffect, useRef, useState } from 'react';

const Canvas = () => {
    const CanvaRef = useRef(null)
    const [postitionMouse, setPostitionMouse] = useState({ x: 0, y: 0 })
    const [arrNodes, setArrNodes] = useState([{ name: 'A', fill: 'red', x: 100, y: 100 }])
    const handleCreateNode = () => {
        let label: string = prompt('Ingrese el label:')
        setArrNodes((state) => ([...state, { ...postitionMouse, fill: 'blue', 'name': label }]))
    }
    const handleMoveNode = (label: string) => {
        console.log(arrNodes);

        setArrNodes(state => state.map(node => {
            if (node.name == label) {
                return ({ ...node, ...postitionMouse })
            }
            return node
        }))

    }
    useEffect(() => {
        const mouseClick = (e) => {
            setPostitionMouse({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', mouseClick)
        return () => {
            window.removeEventListener('mousemove', mouseClick)
        }
    }, [])

    return (
        <Stage width={window.innerWidth} ref={CanvaRef} onDblClick={handleCreateNode} height={window.innerHeight}>
            <Layer>
                <Map />
                {arrNodes.map((item, index) => <Node key={index} onClick={handleMoveNode}  {...item} />)}
            </Layer>
        </Stage>
    )
}

export default Canvas