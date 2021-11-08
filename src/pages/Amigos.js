import React, { useState, useEffect } from 'react';
import '../css/Amigos.css';
import Modal from '../components/modal/Modal.js';
import RandomUserApi from "../services/RandomUserApi";

function Amigos(){
      const [itemSelecionado,setItemSelecionado] = useState(false);
      const [dados,setDados] = useState([]);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
    document.title = 'Amigos';
    let url = "?results=10&seed=3"

    RandomUserApi.get(url)
    .then((response) =>{
        if(response.status >= 200 && response.status < 300  ){
          setDados(response.data.results);
            }else{
          setDados([]);
        }
    })
    .catch((error) =>{
      setDados([]);
    });

  },[]);

  const ola = () => {
    setItemSelecionado("oi");
  }
  
  return(
    
  
    <div>
      
      
      {dados.map(
          (item,index) =>{
              return <div key={index}>
                        <div> <h5>{item.login.username}</h5> </div>
                        <div> <img onClick={ ola} src ={item.picture.medium} alt= {item.name.first} /> </div>
                       
                    </div>
          
          }
      )
          }

          {itemSelecionado  ? <Modal> <h1>oi</h1> </Modal> : null}

    </div>

  );


};
export default Amigos