import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';
import PostList from '../components/feed/PostList';
import Coment from '../components/feed/FeedComent';
import EditPost from '../components/feed/EditPost';
import Perfil from './Perfil';
import MineAmigos from './MineAmigos';
import Footer from '../components/comecoFim/Footer';




function Home() {
  return (
    <div className='home'>
      <title>FREE - Home</title>
      <Navbar />
      <div className="containerHome">
        <div className="esquerda">
          <Perfil/>
        </div>
        <div className="meio">
        <Coment />
        <EditPost />
        <PostList />
        </div>
        <div className="direita">
        <MineAmigos />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;