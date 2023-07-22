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
    fill: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
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
    updateLinkPosition: (id: string, props: { fromX?: number, fromY?: number, toX?: number, toY?: number }) => void
}

const useGraph = create<Graph>()(set => ({
    arrNodes: [],
    arrLinks: [],
    addNode: (node) => set((state) => ({ ...state, arrNodes: [...state.arrNodes, node] })),
    addLink: (link) => set((state) => ({ ...state, arrLinks: [...state.arrLinks, link] })),
    removeNode: (id) => set((state: Graph) => ({ ...state, arrNodes: state.arrNodes.filter((node: Node) => node.id !== id) })),
    removeLink: (id) => set((state: Graph) => ({ ...state, arrLinks: state.arrLinks.filter((link: Link) => link.id !== id) })),
    updateNode: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id === id ? ({ ...node, ...props }) : node)
    })),
    updateLink: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map((link: Link) => link.id === id ? ({ ...link, ...props }) : link)
    })),
    updateNodePosition: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id === id ? ({ ...node, ...props }) : node)
    })),
    updateLinkPosition: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map(
            (link: Link) => link.id === id ? ({ ...link, ...props }) : link)
    }))

}))

export default useGraph