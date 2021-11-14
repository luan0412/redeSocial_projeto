import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';
import PostList from '../components/feed/PostList';
import Coment from '../components/feed/FeedComent';
import EditPost from '../components/feed/EditPost';
import Perfil from './Perfil';



function Home() {
  return (
    <div className='home'>
      <title>Home</title>
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
        <h1 id="em-d2">Em Desenvolvimento</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;