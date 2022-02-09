import React from 'react';
import CarritoCompras from '../img/carrito.svg';
import ItemCount from './ItemCount';

const ItemListContainer = ({cantidades}) => {
  return <div className='conTenedor'>
      <div className='izquierda'><img className='carritoIzquierda' src={CarritoCompras} alt="Carrito"/></div>
      <div className='derecha'>
      <ItemCount/>

      </div>
      
  </div>;
};

export default ItemListContainer;
