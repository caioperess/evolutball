import LigaDasNacoes from './assets/Volei/LigaDasNacoes.png';
import SuperLiga from './assets/Volei/SuperLiga.png';
import LigaItaliana from './assets/Volei/LigaItaliana.png';
import CopaDoMundoVolei from './assets/Volei/CopaDoMundoVolei.png';

import Brasileirao from './assets/Futebol/Brasileirao.png';
import Libertadores from './assets/Futebol/Libertadores.png';
import ChampionsLeague from './assets/Futebol/ChampionsLeague.png';
import PremierLeague from './assets/Futebol/PremierLeague.png';

import NBA from './assets/Basquete/NBA.png';
import NBB from './assets/Basquete/NBB.png';
import CopaDoMundoBasquete from './assets/Basquete/CopaDoMundoBasquete.png';
import EuroBasquete from './assets/Basquete/EuroBasquete.png';

import F1 from './assets/Corrida/F1.png';
import F2 from './assets/Corrida/F2.png';
import StockCar from './assets/Corrida/StockCar.png';
import MotoGP from './assets/Corrida/MotoGP.png';

import Natacao from './assets/Olimpiada/Natacao.png';
import Basquete from './assets/Olimpiada/basquete.png';
import Karate from './assets/Olimpiada/Karate.png';
import Volei from './assets/Olimpiada/Volei.png';

import SaoPaulo from './assets/Times/SaoPaulo.png';
import Palmeiras from './assets/Times/Palmeiras.png';
import Corinthians from './assets/Times/Corinthians.png';
import Santos from './assets/Times/Santos.png';
import Flamengo from './assets/Times/Flamengo.png';
import Fortaleza from './assets/Times/fortaleza.png';
import AtleticoMineiro from './assets/Times/AtleticoMineiro.png';
import Bragantino from './assets/Times/bragantino.png';
import Real from './assets/Times/Real.png';
import City from './assets/Times/City.png';
import Liverpool from './assets/Times/Liverpool.png';
import Villarreal from './assets/Times/VillaReal.png';
import Vivo from './assets/Operadores/vivo.png';
import Claro from './assets/Operadores/claro.png';
import Net from './assets/Operadores/net.png';

export const login = [ 
  {
    "contas": [
      {
        "nome": "Yago",
        "email": "yago@evolutball.com",
        "senha": "yago@evolutball",
        "time": "São Paulo",
        "tipo-conta": "pessoal"
      },
      {
        "nome": "Caio",
        "email": "caio@evolutball.com",
        "senha": "caio@evolutball",
        "time": "São Paulo",
        "tipo-conta": "pessoal"
      },
      {
        "nome": "Renan",
        "email": "renan@evolutball.com",
        "senha": "renan@evolutball",
        "time": "São Paulo",
        "tipo-conta": "pessoal"
      },
      {
        "nome": "Antonio",
        "email": "antonio@evolutball.com",
        "senha": "antonio@evolutball",
        "time": "Corinthians",
        "tipo-conta": "Claro"
      },
    ],
  }
]

export const TipoDeConta = [
  {
    "operadores": [
      {
        "nome": "Claro",
        "logo": Claro,
      },
      {
        "nome": "Vivo",
        "logo": Vivo,
      },
      {
        "nome": "Net",
        "logo": Net,
      },
    ],
  }
]

export const campeonatos = [ 
  {
    "Volei": [
      {
        "nome": "Liga das Nações",
        "logo": LigaDasNacoes,
      },
      {
        "nome": "Superliga Brasileira de Voleibol",
        "logo": SuperLiga,
      },
      {
        "nome": "Liga Italiana de Voleibol",
        "logo": LigaItaliana
      },
      {
        "nome": "Campeonato Mundial de Voleibol",
        "logo": CopaDoMundoVolei,
      },
    ],
    "Futebol": [
      {
        "nome": "Campeonato Brasileiro",
        "logo": Brasileirao,
      },
      {
        "nome": "Libertadores",
        "logo": Libertadores,
      },
      {
        "nome": "Champions League",
        "logo": ChampionsLeague,
      },
      {
        "nome": "Premier League",
        "logo": PremierLeague,
      }
    ],
    "Basquete": [
      {
        "nome": "NBA",
        "logo": NBA,
      },
      {
        "nome": "NBB",
        "logo": NBB,
      },
      {
        "nome": "Campeonato Mundial de Basquete",
        "logo": CopaDoMundoBasquete,
      },
      {
        "nome": "EuroBasket",
        "logo": EuroBasquete,
      },
    ],
    "Corrida": [
      {
        "nome": "Formula 1",
        "logo": F1,
      },
      {
        "nome": "Formula 2",
        "logo": F2,
      },
      {
        "nome": "Stock Car",
        "logo": StockCar,
      },
      {
        "nome": "Moto GP",
        "logo": MotoGP,
      },
    ],
    "Olimpíada": [
      {
        "nome": "Natação",
        "logo": Natacao,
      },
      {
        "nome": "Basquete",
        "logo": Basquete,
      },
      {
        "nome": "Karate",
        "logo": Karate,
      },
      {
        "nome": "Vôlei",
        "logo": Volei,
      },
    ],
  },
]

export const jogos = [ 
  {
    "Brasileirao": [
      {
        "rodada": "Jogo pela 19º rodada",
        "timeCasa": "São Paulo",
        "logoTimeCasa": SaoPaulo,
        "placarTimeCasa": 2,
        "timeFora": "Palmeiras",
        "logoTimeFora": Palmeiras,
        "placarTimeFora": 1,
        "data": "09/05/2022",
        "horario": "16:00",
        "aoVivo": true,
      },
      {
        "rodada": "Jogo pela 19º rodada",
        "timeCasa": "Corinthians",
        "logoTimeCasa": Corinthians,
        "placarTimeCasa": 2,
        "timeFora": "Santos",
        "logoTimeFora": Santos,
        "placarTimeFora": 2,
        "data": "09/05/2022",
        "horario": "16:00",
        "aoVivo": true,
      },
      {
        "rodada": "Jogo pela 19º rodada",
        "timeCasa": "Flamengo",
        "logoTimeCasa": Flamengo,
        "placarTimeCasa": 0,
        "timeFora": "Atlético Mineiro",
        "logoTimeFora": AtleticoMineiro,
        "placarTimeFora": 0,
        "data": "09/05/2022",
        "horario": "19:00",
        "aoVivo": false,
      },
      {
        "rodada": "Jogo pela 19º rodada",
        "timeCasa": "Bragantino",
        "logoTimeCasa": Bragantino,
        "placarTimeCasa": 0,
        "timeFora": "Fortaleza",
        "logoTimeFora": Fortaleza,
        "placarTimeFora": 0,
        "data": "09/05/2022",
        "horario": "20:00",
        "aoVivo": false,
      },
    ],
    "Champions": [
      {
        "rodada": "Final",
        "timeCasa": "Liverpool",
        "logoTimeCasa": Liverpool,
        "placarTimeCasa": 0,
        "timeFora": "Real Madri",
        "logoTimeFora": Real,
        "placarTimeFora": 0,
        "data": "21/05/2022",
        "horario": "13:00",
        "aoVivo": true,
      },
      {
        "rodada": "Semi Finais",
        "timeCasa": "Real Madri",
        "logoTimeCasa": Real,
        "placarTimeCasa": 3,
        "timeFora": "Manchester City",
        "logoTimeFora": City,
        "placarTimeFora": 1,
        "data": "09/05/2022",
        "horario": "Encerrado",
        "aoVivo": false,
      },
      {
        "rodada": "Semi Finais",
        "timeCasa": "Villarreal ",
        "logoTimeCasa": Villarreal,
        "placarTimeCasa": 2,
        "timeFora": "Liverpool",
        "logoTimeFora": Liverpool,
        "placarTimeFora": 3,
        "data": "09/05/2022",
        "horario": "Encerrado",
        "aoVivo": false,
      },
    ],
    
  },
]

export const timeDoCoracao = [ 
  {
    "SaoPaulo": [
      {
        "rodada": "Jogo pela 19º rodada",
        "timeCasa": "São Paulo",
        "logoTimeCasa": SaoPaulo,
        "placarTimeCasa": 2,
        "timeFora": "Palmeiras",
        "logoTimeFora": Palmeiras,
        "placarTimeFora": 1,
        "data": "09/05/2022",
        "horario": "19:00",
        "aoVivo": true,
      },
      {
        "rodada": "Semi Final",
        "timeCasa": "São Paulo",
        "logoTimeCasa": SaoPaulo,
        "placarTimeCasa": 0,
        "timeFora": "Atlético Mineiro",
        "logoTimeFora": AtleticoMineiro,
        "placarTimeFora": 0,
        "data": "12/05/2022",
        "horario": "19:00",
        "aoVivo": false,
      },
      {
        "rodada": "20º",
        "timeCasa": "Bragantino",
        "logoTimeCasa": Bragantino,
        "placarTimeCasa": 0,
        "timeFora": "São Paulo",
        "logoTimeFora": SaoPaulo,
        "placarTimeFora": 0,
        "data": "16/05/2022",
        "horario": "20:00",
        "aoVivo": false,
      },
    ],    
  },
]