import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({cantidades}) => {
  return <>
        <div className="promoProducto">
            <div className="fotoProducto1"></div>
            <div className="descripcionProducto">
            <h1 className="detallePrecio">Vestido Lalala</h1>
            <h2 className="precio">$23.000.-</h2>
          </div>
          <ItemCount/>
      </div>
      </>
  ;
};

export default ItemListContainer;
