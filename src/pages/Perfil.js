import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Perfil() {

    const [ dados, setDados ] = useState([]);

    useEffect(() => {
        axios.get("https://start-cadastro.herokuapp.com/list")
        .then((response) => {
            setDados(response.data)
            
        }).catch(() => {
            console.log('nao foi_cadastro')
        })

    }, [])

    return(
      <>
      {dados.map((item, index) => {
            return(
                <div className="master" key={index}>
                    <div className="foto1">
                    <h1><img src="data:image/jpeg;base64,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" alt="" /></h1>
                    </div>

                    <div className="nome1">
                        <h3>Rafaela Soares</h3>
                    </div>

                    <div className="nome2">
                        <h3>{item.nome}</h3>
                    </div>

                    <div className="link">
                        <a href="https://account.aq.com/Login" target="_blank" rel="noopener noreferrer">Adventure Quest Worlds</a>
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
                        <a href="http://" target="_blank" rel="noopener noreferrer"> Start Latam</a>
                    </div>

                    <div className="link">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Rede Cidadã</a>
                    </div>

                    <div className="link"> 
                        <a href="http://" target="_blank" rel="noopener noreferrer">Accenture</a>
                    </div>
                
                </div>
            );
        })}
    

        

        </>   
    )
}