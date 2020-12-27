import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import api from '../../services/api';


import { Container } from './styles';

export default function Button(props) {

  const [ colorIcon, setColorIcon ] = useState(false);

  async function handleLikePets(id){
    await api.post(`/pets/${id}/likes`);

    if(!colorIcon){
      return setColorIcon(true);
    }
    return setColorIcon(false)
  }

  return (
    <Container type="button" onClick={() => handleLikePets(props.idPet)} >
      <FaHeart
        size={20}
        color={colorIcon ?"#FF4B33" : "#BDBDBD" }
      />
    </Container>
  );
}