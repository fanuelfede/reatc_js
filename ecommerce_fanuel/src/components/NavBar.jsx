import React from 'react';
import CartWidget from './CartWidget';


import LogoMIMI from './LogoMIMI';

function NavBar (){

    return <nav className="navBar">
        
        
        <LogoMIMI/>
        <ul className="botonera">
        <li className="botonMenu">colecciones</li>
        <li className="botonMenu">accesorios</li>
        <li className="botonMenu">carteras</li>
        <li className="botonMenu">franquicias</li>
        <li className="botonMenu">contacto</li>
        <CartWidget/>
        </ul>
        <form className="buscador">
        <input className="campoBuscar" type="search" placeholder="Search" aria-label="Search"/>
        <div className="botonBuscar" type="submit">Buscar</div>

        </form>
</nav>

}

export default NavBar;





