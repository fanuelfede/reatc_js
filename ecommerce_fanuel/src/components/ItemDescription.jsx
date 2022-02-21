import React from 'react'


const ItemDescription = ({ precio, nombre }) => {
  return (
    <div className="descripcionProducto">
      <h1 className="detallePrecio">{nombre}</h1>
      <h2 className="precio">{precio}</h2>
    </div>
  )
}

export default ItemDescription