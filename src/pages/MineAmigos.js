import React from 'react';
import '../css/MineAmigos.css';

function MineAmigos(){
    return(
        <div className="boxAmigos">
            <div className="contAmigos">
                <div className="boxImg">
                    <img src="https://randomuser.me/api/portraits/med/women/64.jpg" />
                </div>
                <div className="boxInfo">
                    <p className="nome">شهید کشواد</p>
                    <p className="email">rh.rdyyn@example.com</p>
                </div>
            </div>
        </div>
    );
}

export default MineAmigos;