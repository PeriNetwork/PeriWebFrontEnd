import feedPost1 from '../img/feedProfile1.jpg';
import feedPost2 from '../img/tucano.jpg';
import PerfilPfp from '../img/pfp1.jpg';
import PerfilPfp2 from '../img/pfp2.jpg';
import PerfilPfp3 from '../img/pfp3.png';

export const ProfileFeed = [
    {
        userImg: PerfilPfp,
        name: 'Tzuyu',
        username: '@Tzuyus',   
        conteudo: feedPost1,
        imagem: true,
        descricao: "Novo grafite feito em São Paulo :))",
        likes: 2300,
        liked: true
    },

    {
        userImg: PerfilPfp2,
        name: 'Stan',
        username: '@Stanley',
        conteudo:  'Nós, os que escrevemos, temos na palavra humana, escrita ou falada, grande mistério que não quero desvendar com o meu raciocínio que é frio. Tenho que não indagar do mistério para não trair o milagre.',
        imagem: false,
        descricao: 'Poema de Clarice Lispector',
        likes: 150,
        liked: false
    },

    {
        userImg: PerfilPfp3,
        name: 'usuario707',
        username: '@user707',
        conteudo: feedPost2,
        imagem: true,
        descricao: 'Minha nova fotografia enquanto observava aves',
        likes: 455,
        liked: false
    },

]

