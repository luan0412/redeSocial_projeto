import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/Login',
    icon: <IoIcons.IoLogInOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Amigos',
    path: '/Amigos',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },

];