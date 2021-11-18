import React, { useState, useEffect } from 'react';


export default function Perfil() {

    return(
      <>
     
        <div className="master">
            <div className="foto1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy-4N8QPJRTHSmxretNrO4U_wGrR_ljzPvQ&usqp=CAU" alt="" />
            </div>

            <div className="nome1">
                <h3>João Lima</h3>
            </div>

            <div className="dados">
                <p>Idade: 23</p>
            </div>

            <div className="dados">
                <p>Cidade: jaboatão dos Guararapes</p>
            </div>

            <div className="dados">
                <p>Email: JujubaFeliz@gamail.com</p>
            </div>

            <div className="nome2">
                <h3>Jogos:</h3>
            </div>

            <div className="link">
                <a className="linkJogos" href="https://account.aq.com/Login" target="_blank" rel="noopener noreferrer">Adventure Quest Worlds</a>
            </div>

            <div className="link">
                <a href="https://www.transformice.com" target="_blank" rel="noopener noreferrer">Transformice</a>
            </div>

            <div className="link">
                <a href="https://ddtank.pt/pt/ddtank/?gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk38_ia3_DL1SVb4wQjN2UjUqYFJ5IxyljC8xw8liVPlmQAezznCOUoaAqaTEALw_wcB" target="_blank" rel="noopener noreferrer">DDDTank</a>
            </div>

            <div className="nome3">
                <h3>Comunidades:</h3>
            </div>

            <div className="link">
                <a href="https://www.instagram.com/start_recife/" target="_blank" rel="noopener noreferrer"> Start</a>
            </div>

            <div className="link">
            <a href="https://www.redecidada.org.br/" target="_blank" rel="noopener noreferrer">Rede Cidadã</a>
            </div>

            <div className="link"> 
                <a href="https://www.accenture.com/br-pt" target="_blank" rel="noopener noreferrer">Accenture</a>
            </div>
        
        </div>
        
    

        

        </>   
    )
}