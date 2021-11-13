import React from 'react'
import './Buscar.css'
import * as BiIcons from 'react-icons/bi';


function BarraDeBuscar() {
    return (
        <div className="boxBusca">
            <label for="buscar">
                <i className="icon"><BiIcons.BiSearchAlt className="ico" /></i>
            </label>

            <input type="text" placeholder="Buscar..." id="buscar" className="buscar" />
        </div>
    );
}

export default BarraDeBuscar;