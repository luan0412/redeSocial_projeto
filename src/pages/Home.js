import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';
import PostList from '../components/feed/PostList';
import Coment from '../components/feed/FeedComent';
import EditPost from '../components/feed/EditPost';
import TelaAmigos from '.TelaAmigos';
import Perfil from './Perfil';



function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="container">
        <div className="esquerda">
          <Perfil/>
        </div>
        <div className="meio">
        <Coment />
        <EditPost />
        <PostList />
        </div>
        <div className="direita">
        </div>
      </div>
    </div>
  );
}

export default Home;