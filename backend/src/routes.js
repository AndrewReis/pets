const { Router } = require('express');
const { uuid } = require('uuidv4');

const routes = Router();

const pets = [];

routes.get('/pets', (request, response) => {
  const { species } = request.query;

  const results = species 
    ? pets.filter(pet => pet.species === species)
    : pets;
  
  return response.json(results);
});

routes.post('/pets', (request, response) => {
  const { name, description, gender, species, city } = request.body;

  const like = 0;

  const pet = {
    id: uuid(),
    name,
    description,
    gender,
    species,
    city,
    like
  };

  pets.push(pet);

  return response.json(pet);
});

routes.put('/pets/:id', (request, response) => {
  const { id } = request.params;
  const { name, description, gender, species, city } = request.body;

  const findIndex = pets.findIndex(pet => pet.id === id);

  if (findIndex < 0){
    return response.status(400).json({error: 'Pet not found.'});
  }

  const updatePet = {
    id,
    name,
    description,
    gender,
    species,
    city
  };

  pets[findIndex] = updatePet;

  return response.json(updatePet);
});

routes.delete('/pets/:id', (request, response) => {
  const { id } = request.params;

  const findPetIndex = pets.findIndex(pet => pet.id === id);

  if(findPetIndex < 0 ){
    return response.status(400).json({error: 'Pet not found.'});
  }

  pets.splice(findPetIndex, 1);

  return response.status(204).send();
});

routes.post('/pets/:id/likes', (request, response) => {
  const { id } = request.params;

  const findPetIndex = pets.findIndex(pet => pet.id === id);

  if(findPetIndex < 0 ){
    return response.status(400).json({error: 'Pet not found.'});
  }

  const pet = pets[findPetIndex];

  const newPet = {
    id,
    name: pet.name,
    description: pet.description,
    gender: pet.gender,
    species: pet.species,
    city: pet.city,
    like: pet.like ? 0 : 1,
  }

  pets[findPetIndex] = newPet;

  return response.json(newPet);
});

module.exports = routes;