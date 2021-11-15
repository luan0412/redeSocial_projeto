import React, { useState } from 'react';
import '../css/Login.css';
import Video from '../source/videofull.mp4';
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
  console.log(senha)

  let history = useHistory()
    
  function handleLogin(){
   
       history.push("/")
    
  }


  return (<div>
  
  <title>Login</title>
  
  <header> 
  
    <div> 
      
    <Header />
    
    </div> 
  
  </header>
  
  
  <div className ="main">
  
      
    
      <video  autoPlay loop muted > 
    
        <source className="video1"  src= {Video} type="video/mp4"/>
  
      </video>
  
  
  
  <form id="formLogin" onSubmit={handleSubmit(handleLogin)} autocomplete="off">
     
     <h3 className="logo2">L O G I N </h3>
  
     <div> <span className="spanLogin">{errors.email?.message}</span> </div>
     <div className = "campoemail"  >
     <input type ="text" placeholder ="E-mail" name="email" {...register('email') } onChange={ (e) => {setEmail(e.target.value)}} />
    
     </div>
  
     <div className="camposenha">
     <div> <span className="spanLogin">{errors.senha?.message}</span> </div>
     <input type ="password" placeholder = "Senha" name="senha" {...register('senha') } onChange={ (e) => {setSenha(e.target.value)}}/>
    
     </div>
    <button className="botaoentrar" type="submit">Entrar</button>
  
    <div className="linhahorizontal"> </div>   
    
  
    <div>
      <Link to="/Cadastro">
        <button className ="botacadastro" >Cadastre-se</button>
      </Link>
    </div>
  </form>

   
  
  </div>


  <div className="footer">
      
       <Footer />

    </div>
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>)
  
  }