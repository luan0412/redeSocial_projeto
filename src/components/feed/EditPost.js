import React, { useState, useEffect } from 'react';
import './Feed.css';
import avata from './img/perfil.png';
import axios from 'axios';

function EditPost() {

    const [ posts, setPosts ] = useState([]);


    useEffect(() => {
        axios.get("https://projeto-start.herokuapp.com/list_posts")
        .then((response) => {
            setPosts(response.data.posts)
            
        }).catch(() => {
            console.log('nao foi2')
        })

    }, [])

    function deletePost(id){
        axios.delete(`https://projeto-start.herokuapp.com/delete_post/${id}`)
        setPosts(posts.filter(post => post._id !== id))
    }

  return (
      <>
      {posts.map((post, key) => {
            return(
                <div className="post" key={key}>
        
                    <div className="post-header">
                        <img className="avatar" src={ avata } />
                        <div className="details">
                            <span>Avatar temporário</span>
                            <span>23:67</span>
                        </div>
                    </div>
                    <form className="form">
                        <div className="butoes">
                            <button onClick={() => deletePost(post._id)} id="butt-delet">Apagar</button>
                        </div>
                        <p className="post-content">{post.content}</p>
                    </form>
                </div>
            );
        })}
      </>
    
  );
}

export default EditPost;