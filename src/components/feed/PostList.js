import React, { useState } from 'react';
import './Feed.css';

import PostItem from './PostItem';

import occa from './img/occa.jpeg';
import henthony from './img/henthony.jpg';
import luan from './img/luan.jpg';
import bruno from './img/bruno.jpg';
import davi from './img/davi.jpg';
import philipe from './img/philipe.jpg';



export default function PostList() {
    const [posts] = useState([
      {
        id: 1,
        author: {
          name: 'Paula Silva',
          avatar: 'https://randomuser.me/api/portraits/women/37.jpg'
        },
        date: '08 Nov 2021',
        content: 'Pessoal, alguém sabe se a Accenture está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Renan Borba',
              avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
            },
            date: '08 Nov 2021',
            content:
              'A Accenture está sempre em busca de novos talentos, geralmente ficam de olho em quem se destaca no Github, inclusive grande parte do time deles é composto por jovens talentos. Você pode encontrar um formulário de novos talentos no site da empresa'
          }
        ]
      },

      {
        id: 7,
        author: {
          name: 'Henthony Guilherme',
          avatar: henthony
        },
        date: '08 Nov 2021',
        content: 'Foi simplesmente incrível! Aprendi muitíssimas coisas novas. Obrigado o pessoal da OCCA pelo o acolhimento.',
        img_post: <img src={occa} id="img01"/>
        ,
        comments: [
          {
            id: 5,
            author: {
              name: 'João Santos',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: '08 Nov 2021',
            content:
              'Nossa achei interessante, marcarei uma visita!'
          }
        ]
      },

      {
        id: 3,
        author: {
          name: 'Bruno Amorim',
          avatar: bruno
        },
        date: '08 Nov 2021',
        content:
          'Fala galera, beleza?\nEstou fazendo o curso gratuito da Start Latam de desenvolvimento e está sendo muito massa! Alguém aí mais fazendo? Comenta na publicação para trocarmos uma idéia e infos',
        comments: [
          {
            id: 12,
            author: {
              name: 'Luan Felipe',
              avatar: luan
            },
            date: '08 Nov 2021',
            content:
              'Também estou fazendo o curso e estou adorando! Estou no módulo sobre React e estou ansiosa para o próximo sobre React com Docker'
          },
          {
            id: 11,
            author: {
              name: 'Henthony Guilherme',
              avatar: henthony
            },
            date: '08 Nov 2021',
            content:
              'Também estou fazendo o curso! Essas aulas de react estão sendo incríveis.'
          },
          {
            id: 13,
            author: {
              name: 'Davi Gonçalves',
              avatar: davi
            },
            date: '08 Nov 2021',
            content:
              'Também estou participando, além de ter excelentes aulas os monitores sempre estão la para dar um help.'
          },
          {
            id: 4,
            author: {
              name: 'Philipe Lima',
              avatar: philipe
            },
            date: '08 Nov 2021',
            content:
              'Eu também! Com as aulas da professora Clau não tem como não aprender.'
          },
          {
            id: 14,
            author: {
              name: 'João Domingos',
              avatar: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            date: '08 Nov 2021',
            content:
              'Que daoraa! Tô pensando em me inscrever na próxima turma pra ver qual é desse curso grátis, pq mesmo sendo gratuito, dizem que os devs saem super preparados'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Guilherme Pereira',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        date: '08 Nov 2021',
        content:
          'Fala pessoal, td beleza?\nEstou a procura de oportunidades de dev',
    
        comments: [
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '08 Nov 2021',
            content:
              'Também tô na procura!'
          },
          {
            id: 5,
            author: {
              name: 'João Santos',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: '08 Nov 2021',
            content:
              'Poxa vida, ontem mesmo estava com duas vagas abertas aqui onde trabalho. Na próxima encaminho elas antes!'
          },
        ]
      },
      
    ])

    return (
      <div className="postlist">
        {}
        { posts.map(post => (
          <PostItem key={ post.id } { ...post } />
        ))}
      </div>
    );
  };
