import React, { useState, useEffect } from 'react';
import './Buscar.css'
import * as BiIcons from 'react-icons/bi';


function BarraDeBuscar() {

    

    const filtrar = (e) => {
        if(e.target.value && e.target.value.length >= 3){
            let historico = JSON.parse(localStorage.getItem("amigos_free"));
            if (historico) {
                let results =  historico.filter((item)=>{
                    return item.name.first.includes(e.target.value) == true;
                });
                localStorage.setItem("amigos_free_filter", JSON.stringify(results)) 
            }else{
                localStorage.setItem("amigos_free_filter", {})
            }
        }else{
            localStorage.setItem("amigos_free_filter", {})

        }

}
    return (
        <div className="boxBusca">
            <label for="buscar">
                <i className="icon"><BiIcons.BiSearchAlt className="ico" /></i>
            </label>

            <input type="text" autoComplete onChange={filtrar} placeholder="Filtrar por nome.." id="buscar" className="buscar" />
        </div>
    );
}


export default BarraDeBuscar;