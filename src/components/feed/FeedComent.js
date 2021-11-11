import React from 'react';
import './Feed.css';
import avata from './img/perfil.png';
import axios from 'axios';

import { useHistory } from 'react-router-dom';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const  schema = yup.object().shape({
    content: yup.string().required('O campo nome é obrigatório')
})


function Coment() {

    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    let history = useHistory();


    const addPost = data => axios.post("https://projeto-start.herokuapp.com/create_post", data)
    .then(() => {
        history.go(0)
    }).catch(() => {
        console.log('nao foi')
    })

  return (
    <div className="post">
        <div className="post-header">
            <img className="avatar" src={ avata } />
            <div className="details">
                <span>Avatar temporário</span>
                <span>23:67</span>
            </div>
        </div>
        <form className="form" onSubmit={handleSubmit(addPost)}>
            <div className="butoes">
                <button type="submit" >Enviar</button>
            </div>
            
            <textarea id="texto" type="text" placeholder="Escreva seu post aqui..." name="content" {...register('content') }></textarea>
            <span className="err" >{errors.content?.message}</span>
        </form>
    </div>
  );
}

export default Coment;