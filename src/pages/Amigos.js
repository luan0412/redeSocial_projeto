import React, { useState, useEffect } from 'react';
import '../css/Amigos.css';
import LocalModal from '../components/modal/localModal.js';
import RandomUserApi from "../services/RandomUserApi";
import '../components/modal/styles.scss';
import '../components/buscar/Buscar.css';
import * as BiIcons from 'react-icons/bi';

import Navbar from '../components/navbar/Navbar';

function Amigos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(null)
  const [dados, setDados] = useState([]);
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [isMensagemVisible, setIsMensagemVisible] = useState(false);  

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
    getApi();
  }, []);
  
  const getApi = () =>{
    let url = "?results=54&seed=666";

    RandomUserApi.get(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setDadosIniciais(response.data.results)
          setDados(response.data.results);
        } else {
          setDadosIniciais([]);
          setDados([]);
        }
      })
      .catch((error) => {
        setDadosIniciais([]);
        setDados([]);
      });
  }

  const filtrar = (e) => {
      if(e.target.value && e.target.value.length >= 3){
         if (dadosIniciais && dadosIniciais.length > 0) {
              let results =  dadosIniciais.filter((item)=>{
                  return item.name.first.toLowerCase().includes(e.target.value.toLowerCase());
              });
             setDados(results);
          } else{
            setDados(dadosIniciais);
          }
      } else{
          setDados(dadosIniciais);
      }
  }

  const setUsuarioEspecifico = (user) => {
    setIsModalVisible(true)
    setUser(user)
  }

  return (

    <>
      <Navbar />
      <div className="boxBusca">
          <label for="buscar">
              <i className="icon"><BiIcons.BiSearchAlt className="ico" /></i>
          </label>

          <input type="text" onChange={filtrar} placeholder="Filtrar por nome.." id="buscar" className="buscar" />
      </div>
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
                    <div className="imagemModalDiv"><img id="imagemModal" src={user.picture.large} alts={user.name.first} /></div>
                    <div className="modalClassAll">
                      <div className="modalClass">

                        <div className="textos"><p id="nome"> <span id="spanEdit"> Nome: </span> {user.name.first}</p>
                          <p id="sobrenome"> <span id="spanEdit"> Sobrenome: </span> {user.name.last}</p>
                          <p id="pais"> <span id="spanEdit"> País:</span> {user.location.country}</p>
                          <p id="usuario"> <span id="spanEdit"> Usuário: </span> {user.login.username}  </p>
                          <div id="divBotaoM"> 
                              <button id="mensagemBotao" onClick={() => setIsMensagemVisible(true)}> Escrever mensagem </button>
                              {  isMensagemVisible === true ? 
                                  <div>
                                      <textarea></textarea>
                                      <button>enviar</button>  <button onClick={() => setIsMensagemVisible(false)}>cancelar</button>
                                  </div>
                                  : ""
                              }
                          </div>
                        </div>
                      </div>
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