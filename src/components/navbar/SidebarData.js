import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from "react-icons/bs";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Amigos',
    path: '/Amigos',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },

 
    {
      title: 'Sobre',
      path: '/Sobre',
      icon: <AiIcons.AiOutlineExclamation/>,
      cName: 'nav-text'
    },
  {
    title: 'Sair',
    path: '/Login',
    icon: <BsIcons.BsDoorClosed />,
    cName: 'nav-text'
  },

];