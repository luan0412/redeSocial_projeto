import React from 'react'
import './Buscar.css'
import * as BiIcons from 'react-icons/bi';


function BarraDeBuscar(){
    return(
        <div className="box-busca">
            <i className="icon"><BiIcons.BiSearchAlt className="ico" /></i>
            <input type="text" placeholder="Buscar..."  className="buscar" />
        </div>
    );
}

export default BarraDeBuscar;