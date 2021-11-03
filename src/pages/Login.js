import React from 'react';
import '../css/Login.css';
import Video from './videofull.mp4'





export default function Login (){

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
  
  
  
  <form>
     
     <h3 className="logo2">L O G I N </h3>
  
  
     <div className = "campoemail"  >
     <input type ="text" placeholder ="E-mail" />
     </div>
  
     <div className="camposenha">
     <input type ="password" placeholder = "Senha" />
     </div>
    <button className="botaoentrar">Entrar</button>
  
    <div className="linhahorizontal"> </div>   
    
  
    <div>
     <button className ="botacadastro">Cadastrar</button>
    </div>
  </form>
  
  </div>
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>)
  
  }