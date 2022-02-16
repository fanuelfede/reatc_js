import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";


const ItemCount = ({nombre}) => {
    const [contador, setContador] = useState (1);

  return <>
    <div className="contadorProducto">
    
    
    <button className="masOmenos" onClick = {() => setContador (contador-1)}>-</button>
    <div >{contador}</div>
    <button className="masOmenos" onClick = {() => setContador (contador+1)}>+</button>
    </div>
    <button className="comprando" onClick = {() => setContador (1)}>comprar</button>
    
    
    
    { contador > 5 && setContador(5)}
    { contador < 1 && setContador(1)}
  </>
}

export default ItemCount

