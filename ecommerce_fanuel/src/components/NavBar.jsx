import React from 'react';
import CartWidget from './CartWidget';


import LogoAIQ from './LogoAIQ';

function NavBar (){

    return <nav> 
        
        <ul className="pipoca">    
        <LogoAIQ/>
        <li><a className="botonete" href="#">Novedades</a></li>
        <li><a className="botonete" href="#">Productos</a></li>
        <li><a className="botonete" href="#">Servicios</a></li>
        <li><a className="botonete" href="#">Encontranos</a></li>
        <CartWidget/>
        </ul> 
     </nav>

}

export default NavBar;

