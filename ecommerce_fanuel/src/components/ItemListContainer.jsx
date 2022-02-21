import React from 'react';
import ItemCount from './ItemCount';
import ItemPhoto from './ItemPhoto';
import ItemDescription from './ItemDescription';

const ItemListContainer = () => {
  return <>
    <div className="promoProducto">
      <ItemPhoto foto={"fotoProducto1"} />
      <ItemDescription nombre={"vestido lalala"} precio={"22.000.-"} />
      <ItemCount stock={5} initial={1} />
    </div>
  </>
    ;
};

export default ItemListContainer;
