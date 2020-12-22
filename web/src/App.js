import React from 'react';
import { FiMapPin, FiHeart } from 'react-icons/fi';
import logo from './assets/logo.png';
import dog from './assets/dog.png';
import header from './assets/header.svg';

import './App.css'

function App(){
  return (
    <div className="container">
     <div className="homepage">
        <header>
          <img src={logo} alt="logo pets"/>
        </header>
        <nav>
          <ul>
            <li>Dogs</li>
            <li>Cats</li>
          </ul>
        </nav>
        <main>
          <a href="#">
            <img src={dog} alt="dog"/>
            <div className="informations">
              <strong>Meu Dog</strong>
              <span>  <FiMapPin size={12} color="#5533EA" /> Porto Alegre RS</span>
              <p>sobre....</p>
            </div>
            <button type="button" onClick={() => alert('ola')}  > <FiHeart size={20} color="#BDBDBD" /> </button>
          </a>
          <a href="#">
            <img src={dog} alt="dog"/>
            <div className="informations">
              <strong>Meu Dog</strong>
              <span>  <FiMapPin size={12} color="#5533EA" /> Porto Alegre RS</span>
              <p>sobre....</p>
            </div>
            <button type="button" onClick={() => alert('ola')}  > <FiHeart size={20} color="#BDBDBD" /> </button>
          </a>
          <a href="#">
            <img src={dog} alt="dog"/>
            <div className="informations">
              <strong>Meu Dog</strong>
              <span>  <FiMapPin size={12} color="#5533EA" /> Porto Alegre RS</span>
              <p>sobre....</p>
            </div>
            <button type="button" onClick={() => alert('ola')}  > <FiHeart size={20} color="#BDBDBD" /> </button>
          </a>
          <a href="#">
            <img src={dog} alt="dog"/>
            <div className="informations">
              <strong>Meu Dog</strong>
              <span>  <FiMapPin size={12} color="#5533EA" /> Porto Alegre RS</span>
              <p>sobre....</p>
            </div>
            <button type="button" onClick={() => alert('ola')}  > <FiHeart size={20} color="#BDBDBD" /> </button>
          </a>
          <a href="#">
            <img src={dog} alt="dog"/>
            <div className="informations">
              <strong>Meu Dog</strong>
              <span>  <FiMapPin size={12} color="#5533EA" /> Porto Alegre RS</span>
              <p>sobre....</p>
            </div>
            <button type="button" onClick={() => alert('ola')}  > <FiHeart size={20} color="#BDBDBD" /> </button>
          </a>
        </main>
     </div>
     <div className="container-form">
        <form>
          <input placeholder="Nome do pet"/>
          <input placeholder="endereço"/>
          <input placeholder="text"/>
          <input placeholder="text"/>
          <textarea cols="30" rows="10" placeholder="descrição" ></textarea>
          <button type="button">cadastrar</button>
        </form>
     </div>
    </div>
  );
}

export default App;