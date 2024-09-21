import React from "react"
import Titulo from "./components/Titulo"
import Propiedades from "./components/Propiedades"

function App() {
  

  return (
    <>
    <h1>Hola React</h1>

    <Titulo/>
    
   <Propiedades title={mause} price={$4500} prueba= {trabajo1}/>
   <Propiedades title={gabinete} price={$10000} prueba= {trabajo2}/>
   <Propiedades title={monitor} price={$8000} prueba= {trabajo3}/>
   

     
    </>
  )
}

export default App
