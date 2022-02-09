import React, {useState} from "react";


const ItemCount = ({nombre}) => {
    const [contador, setContador] = useState (1);

  return <>
    <div className='derArriba'>{contador}</div>
    <div className='derAbajo'>
    <button className='meNos' onClick = {() => setContador (contador-1)}>restar</button>
    <div className='eleMento'>PIZZAS</div>
    <button className='mAs' onClick = {() => setContador (contador+1)}>sumar</button>
    <button className='mAs' onClick = {() => setContador (1)}>resetear</button>
    
    </div>
    { contador > 24 && setContador ("no hay ma pizza loco!") }
    { contador < 1 && setContador ("no vendimo nada!") }
  </>
}

export default ItemCount