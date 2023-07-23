interface distanceProps {
  x1: number
  y1: number
  x2: number
  y2: number
}
const distance = ({ x1, y1, x2, y2 }: distanceProps) => {
  return Number(
    Math.sqrt((Math.abs(x1 - x2) ^ 2) + Math.abs((y1 - y2) ^ 2)).toFixed(2)
  )
}

export default distance
