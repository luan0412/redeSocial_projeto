import React from 'react';
import './Footer.css';

import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';


function Footer(){
    return(
        <div className="boxFooter">
            <ul className="listaIcon">
                <li id="li_1"><span className="icon"><AiIcons.AiOutlinePhone /></span> +55 (81) 98789-7689</li>
                <li id="li_2"><span className="icon"><HiIcons.HiOutlineMail /></span>free@gmail.com</li>
                <li id="li_3"><span className="icon"><FaIcons.FaRegCopyright /></span> 2021 - FREE Corporation - Todos os direitos reservados</li>
            </ul>
        </div>
    );
}

export default Footer;