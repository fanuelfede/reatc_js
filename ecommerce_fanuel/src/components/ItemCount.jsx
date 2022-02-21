
import React, { useState } from "react";


const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(1);

  function onAdd() {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  function onRest() {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }

  return <>
    <div className="contadorProducto">
      <button className="masOmenos" disabled={contador === initial ? true : false} onClick={() => onRest()}>-</button>
      <div >{contador}</div>
      <button className="masOmenos" disabled={contador === stock ? true : false} onClick={() => onAdd()}>+</button>
    </div>
    <button className="comprando" onClick={() => setContador(initial)}>comprar</button>

  </>
}

export default ItemCount


