import React, { useState } from 'react';
import '../css/Login.css';
import Videofull from '../source/videofull.mp4';
import Header from '../components/começoFim/Header';
import Footer from '../components/começoFim/Footer';


import StartCadastroApi from '../services/StartCadastroApi';

import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const  validar = yup.object().shape({
  email: yup.string().email('O campo e-mail é inválido')
  .required('O campo e-mail é obrigatório'),
  senha: yup.string().required('O campo senha é obrigatório')
})





export default function Login (){

  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(validar)
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [loaging, setLoaging] = useState(false);

  let history = useHistory()
    
  async function handleLogin(){
    await axios.get("https://start-cadastro.herokuapp.com/list", {
      params: {
        email: email,
        senha: senha
      }
    }).then(response => {
      console.log(response.data)
    }).catch(err =>{
      console.log(err)
    })
  }


  return (
    <>
    <title>Login</title>
    <Header />
        <div className="boxLogin">
            <div className="containerLogin">
                <video id="fundo" src={Videofull} autoPlay loop muted type="video/mp4" />
                <div className="video">
                </div>
                <div className="login">
                  <form id="formLogin" onSubmit={handleSubmit(handleLogin)} autocomplete="off">
                      <h3 className="logo2">L O G I N </h3>
                    
                      <fieldset>
                        <input type ="text" placeholder ="E-mail" name="email" {...register('email') } onChange={ (e) => {setEmail(e.target.value)}} />
                        <span className="spanLogin">{errors.email?.message}</span>
                      </fieldset>
                      <fieldset>
                      <input type ="password" placeholder = "Senha" name="senha" {...register('senha') } onChange={ (e) => {setSenha(e.target.value)}}/>
                      <span className="spanLogin">{errors.senha?.message}</span>
                      </fieldset>
                      <fieldset className="field_flex">
                      <button className="botaoentrar" type="submit">Entrar</button>
                      </fieldset>
                      <div className="linhahorizontal"> </div>
                      <fieldset className="field_flex">
                          <button onClick={() => history.push("/Cadastro")} >Cadastre-se</button>
                      </fieldset>
                    </form>
                </div>
            </div>
        
  
        </div>
        <Footer />
    </>
  );  
}
