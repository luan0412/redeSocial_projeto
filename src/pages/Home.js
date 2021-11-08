import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/Home.css';
import PostList from '../components/feed/PostList';
<<<<<<< HEAD
import Coment from '../components/feed/FeedComent';
import EditPost from '../components/feed/EditPost';
=======
import Perfil from './Perfil'
>>>>>>> 676cb73211ef80151d46e85ee9adacf4a6c43d91

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
        <h1>5 amigos ou mais 0.0</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;