import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

function Register(){

  const [ name, setName ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ species, setSpecies ] = useState('');
  const [ city, setCity ] = useState('');
  const [ description, setDescription ] = useState('');

  const [ pets, setPets ] = useState([]);

  async function handleAddNewPet(event){
    // event.preventDefault();

    try {
      const data = {
        name,
        city,
        gender,
        species,
        description
      }
      
      if(!data.name | !data.city | !data.gender | !data.species | !data.description){
        throw new Error('Preencha todos os dados.')
      }
      const response = await api.post('pets', data);
     
      setPets([...pets, response.data]);
    } catch (error) {
      alert(error);
    }
  }

  return (
     <Container>
       <a href="/"><FiArrowLeft size={20}/> voltar </a>
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
          <button type="submit" onClick={handleAddNewPet} >cadastrar</button>
        </form>
     </Container>
  );
}

export default Register;