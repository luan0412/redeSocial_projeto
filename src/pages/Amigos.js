import React, { useState, useEffect } from 'react';
import '../css/Amigos.css';
import LocalModal from '../components/modal/localModal.js';
import RandomUserApi from "../services/RandomUserApi";
import '../components/modal/styles.scss'
import iconeAmigos from "../source/iconAmigos.png"
import Navbar from '../components/navbar/Navbar';

function Amigos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(null)
  const [dados, setDados] = useState([]);
 

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
    let url = "?results=54&seed=666";

    RandomUserApi.get(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setDados(response.data.results);
        } else {
          setDados([]);
        }
      })
      .catch((error) => {
        setDados([]);
      });
  }, []);

  const setUsuarioEspecifico = (user) => {
    setIsModalVisible(true)
    setUser(user)
  }

  return (

    <>  
    <Navbar/>
    <h1 id="titulo">Amigos </h1> 
    

    <div id="master">
    <title>Amigos</title>
     

      
      <div className="mainDiv">

      {dados.map(
        (item, index) => {
          return <div key={index}>

              <div className="mestreDiv">
                <div className="textosDiv"> 
            <div className="nomeDiv"> <p id="nome" className="skeleton skeleton-text"> <span id="spanEdit"> Nome: </span> {item.name.first}</p></div>
            <div className="usuariosDiv"> <p id="usuarios" className="skeleton skeleton-text"> <span id="spanEdit"> Usuário: </span> {item.login.username}</p></div>
            </div>
            
            <div className="imagensDiv"> <img id="imagens" className="skeleton" onClick={() => setUsuarioEspecifico(item)} src={item.picture.large} alt={item.name.first} /> </div>
            </div>


            {isModalVisible ? (

              <LocalModal onClose={() => setIsModalVisible(false)}>
                  <div className="modalClassAll">
                <div className="modalClass">
               <div className="imagemModalDiv"><img id="imagemModal" src={user.picture.large} alts={user.name.first} /></div>  
               <div className="textos"><p id="nome"> <span id="spanEdit"> Nome: </span> {user.name.first}</p> 
               <p id="sobrenome"> <span id="spanEdit"> Sobrenome: </span> {user.name.last}</p> 
               <p id="idade"> <span id="spanEdit"> Idade: </span>{user.registered.age}</p> 
               <p id="pais"> <span id="spanEdit"> País:</span> {user.location.country}</p> 
               <p id="usuario"> <span id="spanEdit"> Usuário: </span> {user.login.username}  </p> </div> 
               </div>
                <button id="mensagem"> Enviar mensagem </button>
                </div>
              </LocalModal>) : null}
              
          </div>

        }
      )
      }
              </div>

    </div>
    </>

  );


};
export default Amigos