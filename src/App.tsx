import Tablero from "./components/Tablero"
import DatosBasicos from "./components/DatosBasicos";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center border border-dark rounded p-4 my-5 mx-auto w-50">
      <Tablero />
      <DatosBasicos />
    </div>
  )
}

export default App
