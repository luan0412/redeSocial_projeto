import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="container">
        <div className="esquerda">
          <h1>mine Perfil</h1>
        </div>
        <div className="meio">
        <h1>Feed</h1>
        </div>
        <div className="direita">
        <h1>5 amigos ou mas 0.0</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;