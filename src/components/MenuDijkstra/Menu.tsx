import useGraph from "../../store/useGraph"
import useMenu from "../../store/useMenu"
import Buttom from "../NavBar/Buttom"

const Menu = () => {
    const { arrNodes } = useGraph()
    const { changeActive } = useMenu()
    const nodes = arrNodes.map(node => node.name)
    return (
        <div className={`fixed top-0 left-0 h-screen w-full flex justify-end items-center  `}>
            <div className="z-10 bg-slate-500 bg-opacity-50 h-screen w-full" onClick={changeActive}></div>
            <div className="absolute z-20 h-2/3 w-96 bg-white rounded-l-2xl px-4 py-2">
                <select className="">
                    {nodes.map(item => <option value={item}>{item}</option>)}
                </select>
                <select className="">
                    {nodes.map(item => <option value={item}>{item}</option>)}
                </select>
                <Buttom animate={false} type='solid' full label="Calcular" >Calcular</Buttom>
            </div>
        </div>
    )
}

export default Menu