import { toast } from "react-hot-toast/headless";
import { create } from "zustand";
import distance from "../utils/distancePoints";

interface Node {
    id: string,
    name: string,
    fill: string,
    x: number,
    y: number
}
interface Link {
    id: string,
    name: string,
    distance: number,
    fill: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    nodeStart: string,
    nodeEnd: string,
    nodes: Array<string>
}

type Graph = {
    arrNodes: Array<Node>,
    isDelete: boolean,
    changeDelete: () => void,
    changeMove: () => void,
    changeConecte: () => void,
    isMove: boolean,
    isConecte: boolean,
    arrLinks: Array<Link>,
    selectNodes: Array<string>,
    addSelectNode: (id: string) => void,
    addNode: (node: Node) => void,
    addLink: (link: Link) => void,
    removeNode: (id: string) => void,
    removeLink: (id: string) => void,
    updateNode: (id: string, props: { name?: string, fill?: string, x?: number, y?: number }) => void,
    updateLink: (id: string, props: { name?: string, fill?: string, fromX: number, fromY: number, toX: number, toY: number }) => void,
    updateNodePosition: (id: string, props: { x?: number, y?: number }) => void,
    updateLinkPosition: (id: string, props: { fromX?: number, fromY?: number, toX?: number, toY?: number, distance?: number }) => void
}

const useGraph = create<Graph>()(set => ({
    isDelete: false,
    isConecte: false,
    isMove: false,
    changeDelete: () => set((state: Graph) => {
        toast.success('Selecciona un nodo')
        return ({ ...state, isMove: !state.isDelete })
    }),
    changeMove: () => set((state: Graph) => ({ ...state, isMove: !state.isMove })),
    changeConecte: () => set((state: Graph) => ({ ...state, isConecte: !state.isConecte })
    ),
    arrNodes: [
        {
            id: '1212',
            fill: 'purple',
            name: 'A',
            x: 100,
            y: 100
        },
        {
            id: '12121212',
            fill: 'purple',
            name: 'D',
            x: 300,
            y: 600
        },
        {
            id: '123123',
            fill: 'purple',
            name: 'B',
            x: 400,
            y: 500
        },
        {
            id: '12124',
            fill: 'purple',
            name: 'C',
            x: 100,
            y: 500
        },
        {
            id: '121asd24',
            fill: 'purple',
            name: 'F',
            x: 600,
            y: 300
        }
    ],
    arrLinks: [
        {
            id: '12312',
            fill: 'gray',
            fromX: 100,
            fromY: 100,
            name: '1',
            toX: 400,
            toY: 500,
            nodes: ['A', 'B'],
            nodeStart: 'A',
            nodeEnd: 'B',
            distance: 100
        },
        {
            id: '12312112',
            fill: 'gray',
            fromX: 100,
            fromY: 100,
            name: '1',
            toX: 100,
            toY: 500,
            nodes: ['A', 'C'],
            nodeStart: 'A',
            nodeEnd: 'C',
            distance: 100
        },
        {
            id: '1231211122',
            fill: 'gray',
            fromX: 100,
            fromY: 500,
            name: '1',
            toX: 400,
            toY: 500,
            nodes: ['C', 'B'],
            nodeStart: 'C',
            nodeEnd: 'B',
            distance: 100
        },
        {
            id: '123121111122',
            fill: 'gray',
            fromX: 100,
            fromY: 500,
            name: '1',
            toX: 300,
            toY: 600,
            nodes: ['C', 'D'],
            nodeStart: 'C',
            nodeEnd: 'D',
            distance: 100
        },
        {
            id: '1231211asd11122',
            fill: 'gray',
            fromX: 100,
            fromY: 100,
            name: '1',
            toX: 300,
            toY: 600,
            nodes: ['A', 'D'],
            nodeStart: 'A',
            nodeEnd: 'D',
            distance: 100
        },
        {
            id: '1231211asasdasd11122',
            fill: 'gray',
            fromX: 400,
            fromY: 500,
            name: '1',
            toX: 300,
            toY: 600,
            nodes: ['B', 'D'],
            nodeStart: 'B',
            nodeEnd: 'D',
            distance: 100
        }],
    selectNodes: [],
    addSelectNode: (id) => set((state: Graph) => {
        if (state.selectNodes.length == 2) {
            const a = state.arrNodes.filter((node: Node) => node.id == state.selectNodes[0] || node.id == state.selectNodes[1])
            const newLink: Link = {
                name: '1',
                fill: 'gray',
                id: String(Date.now()),
                nodeStart: a[0].name,
                nodeEnd: a[1].name,
                nodes: [a[0].name, a[1].name],
                fromX: a[0].x,
                fromY: a[0].y,
                toX: a[1].x,
                toY: a[1].y,
                distance: distance({ x1: a[0].x, y1: a[0].y, x2: a[1].x, y2: a[1].y })
            }
            return ({ ...state, isConecte: false, selectNodes: [], arrLinks: [...state.arrLinks, newLink] })
        }
        return ({ ...state, selectNodes: [...state.selectNodes, id] })
    }),
    addNode: (node) => set((state: Graph) => ({ ...state, arrNodes: [...state.arrNodes, node] })),
    addLink: (link) => set((state: Graph) => ({ ...state, arrLinks: [...state.arrLinks, link] })),
    removeNode: (id) => set((state: Graph) => ({ ...state, arrNodes: state.arrNodes.filter((node: Node) => node.id !== id) })),
    removeLink: (id) => set((state: Graph) => ({ ...state, arrLinks: state.arrLinks.filter((link: Link) => link.id !== id) })),
    updateNode: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id == id ? ({ ...node, ...props }) : node)
    })),
    updateLink: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map((link: Link) => link.id == id ? ({ ...link, ...props }) : link)
    })),
    updateNodePosition: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id == id ? ({ ...node, ...props }) : node)
    })),
    updateLinkPosition: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map(
            (link: Link) => link.id == id ? ({ ...link, ...props }) : link)
    }))

}))

export default useGraph