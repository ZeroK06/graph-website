import Canvas from "./components/Canvas"
import Launcher from "./components/DragAndDrop/Launcher"
import NavBar from "./components/NavBar/NavBar"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <main className="relative">
        <Toaster position="top-center" />
        <Canvas />
        <Launcher />
        <NavBar />
      </main>
    </>
  )
}

export default App
