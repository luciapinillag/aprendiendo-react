import React from 'react'
import Bar from './Bar'

const nombre = "Francisco";

function Titulo() {
  return (
    <div>Titulo
        <Bar></Bar>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id minus ipsum, laborum culpa accusantium error itaque unde, magnam quos facilis. Reprehenderit eum dolore consequuntur magni ea eaque quod eligendi?</p>

        <h5>El Nombre de la persona es {nombre}</h5>
        
    </div>
  )
}

export default Titulo