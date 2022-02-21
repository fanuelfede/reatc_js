import React from 'react'
import ItemListContainer from './ItemListContainer';



const SeccionPromo = () => {
  return (
    <div className="contenedorSecciones">
      <div className="izquierdaSecciones">
        <div className="titularSeccion">summer sale</div>
      </div>
      <div className="derechaSecciones">
        <ItemListContainer />
      </div>

    </div>
  )
}

export default SeccionPromo