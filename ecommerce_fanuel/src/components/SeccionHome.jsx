import React from 'react'

import fotoHome from '../img/fotoChicaPortada.jpg';

const SeccionHome = () => {
  return (
    <div className="contenedorHome">
    <div className="izquierda"><img className="fotoIzquierda" src={fotoHome} alt="ninia feliz"/></div>
    <div className="derecha">
      <div className="titularSeccion">collection 2022</div>
      <div className="subtituloSeccion">summer sale</div>
    </div>
 </div>
  )
}

export default SeccionHome