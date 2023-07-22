import { create } from "zustand";

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
    arrLinks: Array<Link>,
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
    arrNodes: [{ id: '1212', fill: 'purple', name: 'A', x: 100, y: 100 }, { id: '123123', fill: 'purple', name: 'B', x: 400, y: 500 }, { id: '12124', fill: 'purple', name: 'C', x: 100, y: 500 }],
    arrLinks: [{ id: '12312', fill: 'gray', fromX: 100, fromY: 100, name: '1', toX: 400, toY: 500, nodes: ['A', 'B'], nodeStart: 'A', nodeEnd: 'B', distance: 100 }, { id: '12312112', fill: 'gray', fromX: 100, fromY: 100, name: '1', toX: 100, toY: 500, nodes: ['A', 'C'], nodeStart: 'A', nodeEnd: 'C', distance: 100 }],
    addNode: (node) => set((state) => ({ ...state, arrNodes: [...state.arrNodes, node] })),
    addLink: (link) => set((state) => ({ ...state, arrLinks: [...state.arrLinks, link] })),
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