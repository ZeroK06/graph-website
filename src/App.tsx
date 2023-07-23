import Canvas from "./components/Canvas"
import NavBar from "./components/NavBar/NavBar"
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
      <main className="relative">
        <Toaster position="top-right" />
        <Canvas />
        <NavBar />
      </main>
    </>
  )
}

export default App
