import { Image } from 'react-konva'
import useImage from 'use-image'

const Map = () => {
    const [image] = useImage('/map.png')

    return (
        <Image image={image} height={window.innerHeight} width={window.innerWidth} x={0} y={0} />
    )
}

export default Map