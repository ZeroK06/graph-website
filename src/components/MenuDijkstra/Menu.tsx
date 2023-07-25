import { useState } from "react"
import useGraph from "../../store/useGraph"
import useMenu from "../../store/useMenu"
import Buttom from "../NavBar/Buttom"
import { buildGraph, dijkstra } from '../../utils/dijkstra'

const Menu = () => {
    const { arrNodes, arrLinks, colorateGraph, resetColorate } = useGraph()
    const { changeActive } = useMenu()
    const [minRoute, setMinRoute] = useState(null)
    const nodes = arrNodes.map(node => node.name)
    const [points, setPoints] = useState({ start: nodes[0], end: nodes[0] })
    const handlePoints = ({ target: { value, name } }) => {
        setPoints(state => ({ ...state, [name]: value }))
    }
    const handleOperation = () => {
        const route = dijkstra(buildGraph(arrNodes, arrLinks), arrNodes, arrLinks, points.start, points.end)
        setMinRoute(route)
        colorateGraph(route?.nodes.map(item => item.name), route?.edges.map(item => item.id))
    }
    return (
        <div className={`fixed top-0 left-0 h-screen w-full flex justify-end items-center  `}>
            <div className="z-10  h-screen w-full" onClick={changeActive}></div>
            <div className="absolute flex justify-center flex-col gap-4 shadow-md z-20 h-3/6 w-52 bg-white rounded-l-2xl p-4">
                <h1 className="text-2xl text-center font-semibold uppercase mb-1">Ruta mas corta</h1>
                <div className="flex justify-center gap-4 ">
                    <select name="start" className=" px-4 py-2 outline-none bg-slate-100 rounded-lg" onChange={handlePoints}>
                        {nodes.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                    <select name="end" className="px-4 py-2 outline-none bg-slate-100 rounded-lg" onChange={handlePoints}>
                        {nodes.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                <Buttom onClick={handleOperation} animate type='solid' full label='Calcular' />

                <code className="bg-slate-50 rounded-lg py-4 px-2">
                    {JSON.stringify(minRoute?.nodes.map(item => item.name))}
                </code>
                <Buttom onClick={() => resetColorate()} animate type='outline' full label='Reset' />
            </div>
        </div>
    )
}

export default Menu