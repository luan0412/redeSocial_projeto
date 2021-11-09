import React, { useState, useEffect } from 'react';
import '../css/Amigos.css';
import LocalModal from '../components/modal/localModal.js';
import RandomUserApi from "../services/RandomUserApi";
import '../components/modal/styles.scss'

function Amigos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(null)
  const [dados, setDados] = useState([]);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
    document.title = 'Amigos';
    let url = "?results=50&seed=5"

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


    <div id="master">
      <h1 id="titulo">Amigos </h1>
      <div className="mainDiv">

      {dados.map(
        (item, index) => {
          return <div key={index}>
              <div className="mestreDiv"> 
            <div className="usuariosDiv"> <p id="usuarios">{item.login.username}</p></div>
            <div className="imagensDiv"> <img id="imagens" onClick={() => setUsuarioEspecifico(item)} src={item.picture.large} alt={item.name.first} /> </div>
            </div>
            {isModalVisible ? (
              <LocalModal onClose={() => setIsModalVisible(false)}>
               <div className="imagemModalDiv"><img id="imagemModal" src={user.picture.large} alts={user.name.first} /></div>  <div className="textos"><p id="nome">Nome: {user.name.first}</p> <p id="sobrenome"> Sobrenome: {user.name.last}</p> <p id="idade"> Idade: {user.registered.age}</p> <p id="pais"> País: {user.location.country}</p> <p id="usuario"> Usuário: {user.login.username}  </p> </div> 
              </LocalModal>) : null}
          </div>

        }
      )
      }
              </div>

    </div>

  );


};
export default Amigos