import React from 'react'

function Propiedades(title, price, prueba) {

    let estilos = {backgroundColor:"#C4B9A5", color:"#725AC"}
  return (
    <div>Propiedades
        <h1>Titulo: {title} </h1>


        <h3>Precio: {price} </h3>
        <p>Prueba: {prueba}</p>






    </div>
  )
}

export default Propiedades