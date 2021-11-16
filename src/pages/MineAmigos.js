import React from 'react';
import '../css/MineAmigos.css';
import { useHistory } from 'react-router-dom';


function MineAmigos(){

  let history = useHistory();

    return(
        <div className="boxAmigos">
            <div className="contAmigos contAmigos1">
                
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/women/64.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">browncat312</p>
                    <p className="email">rh.rdyyn@example.com</p>
                </div>
            </div>
            <div className="linhaAmigos"></div>

            <div className="contAmigos contAmigos2">
                
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/women/27.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">whitepanda580</p>
                    <p className="email">misty.moore@example.com</p>
                </div>
            </div>
            <div className="linhaAmigos"></div>

            <div className="contAmigos contAmigos3">
                
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/men/23.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">heavytiger362</p>
                    <p className="email">rudolf.konrad@example.com</p>
                </div>
            </div>
            <div className="linhaAmigos"></div>

            <div className="contAmigos contAmigos4">
                
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/men/46.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">happykoala924</p>
                    <p className="email">dorian.robert@example.com</p>
                </div>
            </div>
            <div className="linhaAmigos"></div>

            <div className="contAmigos contAmigos5">
                
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/women/5.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">biglion870</p>
                    <p className="email">letitia.jones@example.com</p>
                </div>
            </div>
            <div className="linhaAmigos"></div>
            <button className="butaoAmigos" onClick={() => history.push("/Amigos")}>Ver Mas</button>
            
        </div>
    );
}

export default MineAmigos;