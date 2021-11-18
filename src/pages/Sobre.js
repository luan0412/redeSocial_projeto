import React from "react";
import '../css/Sobre.css'

import henthony from '../components/feed/img/henthony.jpeg';
import luan from '../components/feed/img/luan.jpg';
import bruno from '../components/feed/img/bruno.jpg';
import davi from '../components/feed/img/davi.jpg';
import philipe from '../components/feed/img/philipe.jpg';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/comecoFim/Footer';

import * as AiIcons from 'react-icons/ai';


function Sobre(){
 return(
    <div>
         <title>FREE - Sobre</title>
         <Navbar />
         <div className="boxSobre"> 
            <h1>DEVs</h1>
            <div className="nos">
                <div className="sobreImg sobreImg1">
                    <img src={henthony} />
                    <p>Henthony Guilherme</p>
                    <div className="boxIcon">
                    <a href="https://www.linkedin.com/in/henthony-guilherme-ferreira-da-silva-785b4221a/" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillLinkedin className="sobreIcon"/></a>
                    <a href="https://github.com/HenthonyGuilherme" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub className="sobreIcon sobreIcon2" /></a>
                    </div>
                </div>
                <div className="sobreImg sobreImg2">
                    <img src={luan} />
                    <p>Luan Felipe</p>
                    <div className="boxIcon">
                    <a href="https://www.linkedin.com/in/luan-felipe-6947a9200" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillLinkedin className="sobreIcon"/></a>
                    <a href="https://github.com/luan0412" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub className="sobreIcon sobreIcon2" /></a>
                    </div>
                    
                </div>
                <div className="sobreImg sobreImg3">
                    <img src={bruno} />
                    <p>Bruno Amorim</p>
                    <div className="boxIcon">
                    <a href="https://www.linkedin.com/in/bruno-amorim-27660b214/" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillLinkedin className="sobreIcon"/></a>
                    <a href="https://github.com/brnoam" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub className="sobreIcon sobreIcon2" /></a>
                    </div>
                </div>
                <div className="sobreImg sobreImg4">
                    <img src={philipe} />
                    <p>Philipe Lima</p>
                    <div className="boxIcon">
                    <a href="https://www.linkedin.com/in/philipe-lima-470712214/" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillLinkedin className="sobreIcon"/></a>
                    <a href="https://github.com/PhilipeLima123?tab=repositories" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub className="sobreIcon sobreIcon2" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
 );


}

export default Sobre;