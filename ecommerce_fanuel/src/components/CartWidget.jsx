import React from 'react';
import CarritoCompras from '../img/carrito.svg';

const CartWidget = () => {
  return <li><div className='carrito'><img src={CarritoCompras} alt="Carrito"/></div></li>
};

export default CartWidget;
