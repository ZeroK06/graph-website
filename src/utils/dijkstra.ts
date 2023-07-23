interface Node {
  id: string
  fill: string
  name: string
  x: number
  y: number
}

interface Edge {
  id: string
  fill: string
  fromX: number
  fromY: number
  name: string
  toX: number
  toY: number
  nodes: string[]
  nodeStart: string
  nodeEnd: string
  distance: number
}

interface Graph {
  [nodeName: string]: { node: string; distance: number }[]
}

function buildGraph(nodes: Node[], edges: Edge[]): Graph {
  const graph: Graph = {}

  nodes.forEach(node => {
    graph[node.name] = []
  })

  edges.forEach(edge => {
    if (!graph[edge.nodeStart]) {
      graph[edge.nodeStart] = []
    }
    if (!graph[edge.nodeEnd]) {
      graph[edge.nodeEnd] = []
    }

    graph[edge.nodeStart].push({ node: edge.nodeEnd, distance: edge.distance })
    graph[edge.nodeEnd].push({ node: edge.nodeStart, distance: edge.distance })
  })

  return graph
}

interface ShortestPathResult {
  nodes: (Node & { distance: number })[]
  edges: Edge[]
}

function dijkstra(
  graph: Graph,
  startNode: string,
  endNode: string
): ShortestPathResult | null {
  const distances: { [nodeName: string]: number } = {}
  const visited: { [nodeName: string]: boolean } = {}
  const previous: { [nodeName: string]: string | undefined } = {}
  const queue: { node: string; distance: number }[] = []

  Object.keys(graph).forEach(node => {
    distances[node] = node === startNode ? 0 : Infinity
    queue.push({ node, distance: distances[node] })
  })

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance)
    const { node: current, distance } = queue.shift()!

    if (current === endNode) {
      const path = [current]
      let prev = previous[current]
      while (prev) {
        path.unshift(prev)
        prev = previous[prev]
      }

      const shortestPathNodes = path.map(nodeName => ({
        ...(nodes.find(node => node.name === nodeName) as Node),
        distance: distances[nodeName],
      }))

      const shortestPathEdges: Edge[] = []
      for (let i = 1; i < path.length; i++) {
        const nodeStart = path[i - 1]
        const nodeEnd = path[i]
        const edge = edges.find(
          edge =>
            (edge.nodeStart === nodeStart && edge.nodeEnd === nodeEnd) ||
            (edge.nodeStart === nodeEnd && edge.nodeEnd === nodeStart)
        )
        if (edge) {
          shortestPathEdges.push(edge)
        }
      }

      return { nodes: shortestPathNodes, edges: shortestPathEdges }
    }

    if (visited[current]) continue
    visited[current] = true

    for (const neighborData of graph[current]) {
      const { node: neighbor, distance: edgeDistance } = neighborData
      const newDistance = distance + edgeDistance

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance
        previous[neighbor] = current
        queue.push({ node: neighbor, distance: newDistance })
      }
    }
  }

  return null
}

export default { dijkstra, buildGraph }
