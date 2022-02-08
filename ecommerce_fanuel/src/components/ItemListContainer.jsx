import React from 'react';
import CarritoCompras from '../img/carrito.svg';

const ItemListContainer = ({cantidades}) => {
  return <div className='conTenedor'>
      <div className='izquierda'><img className='carritoIzquierda' src={CarritoCompras} alt="Carrito"/></div>
      <div className='derecha'>
      <div className='derArriba'>{cantidades}</div>
      <div className='derAbajo'>
          <div className='mAs'>+</div>
          <div className='eleMento'>PIZZAS</div>
          <div className='meNos'>-</div>
      </div>
      </div>
      
  </div>;
};

export default ItemListContainer;
