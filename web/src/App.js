import React, { useState, useEffect } from 'react';
import { FiMapPin, FiHeart } from 'react-icons/fi';
import logo from './assets/logo.png';
import dog from './assets/dog.png';

import api from './services/api';

import Button from './components/Button';
import Nav from './components/Nav';

import './App.css'

function App(){

  const [ name, setName ] = useState([]);
  const [ gender, setGender ] = useState([]);
  const [ species, setSpecies ] = useState([]);
  const [ city, setCity ] = useState([]);
  const [ description, setDescription ] = useState([]);

  const [ pets, setPets ] = useState([]);

  async function handleAddNewPet(event){
    event.preventDefault();

    const data = {
      name,
      city,
      gender,
      species,
      description
    }

    const response = await api.post('/pets', data);
   
    setPets([...pets, response.data]);
  }


  useEffect(() =>{
    async function handleGetListPets(){
      const response = await api.get('/pets');

      setPets(response.data);
    }

    handleGetListPets();
  }, []);

  return (
    <div className="container">
     <div className="homepage">
        <header>
          <img src={logo} alt="logo pets"/>
        </header>
        <Nav />
        <main>
          {
            pets.map(pet => (
              <a href="#" key={pet.id} >
                <img src={dog} alt="dog"/>
                <div className="informations">
                  <strong> {pet.name} </strong>
                  <span>  <FiMapPin size={12} color="#5533EA" /> {pet.city} </span>
                  <p> {pet.description} </p>
                </div>
                <Button idPet={pet.id} />
              </a>
            ))
          }
        </main>
     </div>
     <div className="container-form">
        <form>
          <input 
            name={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome do pet"/>
          <input 
            name={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Endereço: cidade/uf"/>
          <input 
            name={gender}
            onChange={e => setGender(e.target.value)}
            placeholder="gênero"/>
          <input 
            name={species}
            onChange={e => setSpecies(e.target.value)}
            placeholder="espécie"/>
          <textarea
            cols="30"
            rows="10"
            placeholder="descrição"
            name={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <button type="button" onClick={handleAddNewPet} >cadastrar</button>
        </form>
     </div>
    </div>
  );
}

export default App;