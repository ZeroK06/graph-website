import { Stage, Layer } from 'react-konva';
import Node from './NavBar/Graph/Node';
import Map from './Map';
import useGraph from '../store/useGraph';
import Link from './NavBar/Graph/Link';
import usePositionMouse from '../hook/usePositionMouse';

const Canvas = () => {
    const [x, y] = usePositionMouse()
    const { arrNodes, addNode, arrLinks, isNew, changeNew } = useGraph()

    const handleCreateNode = () => {
        if (isNew) {
            const a = arrNodes.map(node => node.name)
            let name: string
            do {
                name = prompt('Ingrese el nombre del nuevo nodo:')
            } while (a.includes(name));
            addNode({ fill: 'purple', id: String(Date.now()), name, x, y })
            changeNew(false)
        }
    }
    return (
        <Stage width={window.innerWidth} onDblClick={handleCreateNode} height={window.innerHeight} >
            <Layer>
                <Map />
                {arrLinks.map(link => <Link key={link.id} {...link} />)}
                {arrNodes.map((item) => <Node key={item.id}  {...item} />)}
            </Layer>
        </Stage>
    )
}

export default Canvas