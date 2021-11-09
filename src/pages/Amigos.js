import React, { useState, useEffect } from 'react';
import '../css/Amigos.css';
import LocalModal from '../components/modal/localModal.js';
import RandomUserApi from "../services/RandomUserApi";

function Amigos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(null)
  const [dados, setDados] = useState([]);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
    document.title = 'Amigos';
    let url = "?results=10&seed=3"

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

  const setUsuarioEspecifico = (user) =>{
    setIsModalVisible(true)
    setUser(user)
  }

  return (


    <div id="master">


      {dados.map(
        (item, index) => {
          return <div key={index}>
            <div> <h5>{item.login.username}</h5> </div>
            <div> <img id="imagemModal" onClick={() => setUsuarioEspecifico(item)} src={item.picture.medium} alt={item.name.first} /> </div>
            {isModalVisible ? (<LocalModal onClose={() => setIsModalVisible(false)}>{user.login.username} {user.location.country}  </LocalModal>) : null}
          </div>

        }
      )
      }


    </div>

  );


};
export default Amigos