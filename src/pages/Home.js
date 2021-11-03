import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';
import PostList from '../components/feed/PostList';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="container">
        <div className="esquerda">
          <h1>mine Perfil</h1>
        </div>
        <div className="meio">
        <PostList />
        </div>
        <div className="direita">
        <h1>5 amigos ou mais 0.0</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;