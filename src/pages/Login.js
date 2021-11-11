import React from 'react';
import '../css/Login.css';
import Video from './videofull.mp4'

import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

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
  })

  let history = useHistory()
    
  function handleLogin(data){
    console.log(data)
    history.push("/")
    
  }


  return (<div>
  
  
  
  <header> 
  
    <div> 
      
      <a className="linklogo" href="" target="" > <h3 className="logo1">FREE</h3> </a>
    
    </div> 
  
  </header>
  
  
  <div className ="main">
  
      
    
      <video  autoPlay loop muted > 
    
        <source className="video1"  src= {Video} type="video/mp4"/>
  
      </video>
  
  
  
  <form id="formLogin" onSubmit={handleSubmit(handleLogin)} autocomplete="off">
     
     <h3 className="logo2">L O G I N </h3>
  
     <div> <span className="span">{errors.email?.message}</span> </div>
     <div className = "campoemail"  >
     <input type ="text" placeholder ="E-mail" name="email" {...register('email') } />
    
     </div>
  
     <div className="camposenha">
     <div> <span className="span">{errors.senha?.message}</span> </div>
     <input type ="password" placeholder = "Senha" name="senha" {...register('senha') } />
    
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
      
      <h5 className="copy">Desenvolvido por Equipe Free</h5>

    </div>
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>)
  
  }