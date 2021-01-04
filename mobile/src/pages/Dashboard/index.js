import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
 
import dog from '../../assets/dog.png';
import logo from '../../assets/logo.png';

import api from '../../services/api';

export default function Dashboard(){

  const [pets, setPets] = useState([]);
  const [ likePet, setLikePet ] = useState([]);

  async function handleLikeThisPet(id){
    setLikePet([...likePet, id])
    await api.post(`/pets/${id}/likes`);
    console.log('splice: ', likePet)

    // await handleDeslike(id);
  }

  // async function handleDeslike(id){
  //   const findIndexId = likePet.findIndex(findId => findId === id);
  //   console.log('findIndex: ', findIndexId)
  //   if(findIndexId >= 0){
  //     likePet.splice(findIndexId, 1);
  //     console.log('splice: ', likePet)
  //     return;
  //   }
  // }
  useEffect(() => {
    async function getPetInAPI(){
      const response = await api.get('/pets')
      setPets(response.data);
    }

    getPetInAPI()
  }, []);

  return (
    <View style={styles.container} >
      <Image source={logo} />
      <View style={styles.header} >
        <View style={styles.hgroup} >
          <Text style={styles.title}>
            My Pets
          </Text>
          <Text style={styles.p} >
            Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.
          </Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} >
            <Text style={styles.li} >Cats</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} >
            <Text style={styles.li} >Dogs</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} >
            <Text style={styles.li} >Birds</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} >
            <Text style={styles.li} >Others</Text>
          </TouchableOpacity> 
        </View>
      </View>

      <ScrollView>
       {
         pets.map(pet => (
            <View style={styles.informationContainer} key={pet.id} >
              <View style={styles.informationImage} >
                <Image source={dog} style={styles.informationImage} />
              </View>
              <View style={styles.informationPet}>
                <Text style={styles.title} > {pet.name} </Text>
                <Text style={styles.address} > {pet.city} </Text>
                <Text style={styles.about} > {pet.description} </Text>
              </View>
              <TouchableOpacity style={styles.informationButtonLike} onPress={() => handleLikeThisPet(pet.id)} >
                <Icon name="heart" size={20} color={ likePet.includes(pet.id) ? "#FF4B33" : "#BDBDBD" } />
              </TouchableOpacity>
            </View>
         ))
       }
      </ScrollView>

      <View style={styles.footer} >
        <TouchableOpacity style={styles.footerButton} >
          <Icon name="home" size={22} color="#5533EA" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
        <Icon name="heart" size={20} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  hgroup: {
    width: 320,
    alignItems: 'center',
  },  

  nav: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  ul: {
    width: 76,
    backgroundColor: '#F5F5FA',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 12,

    marginLeft: 8,
  },

  li: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9999c7',
  },

  informationContainer: {
    backgroundColor: '#F5F2FA',
    width: 327,
    height: 130,
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 27,
    shadowColor: "#001",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5.68,
    elevation: 2,
  },

  informationImage: {
    flex: 1,
  },

  informationPet: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333'
  },

  address: {
    fontSize: 12,
    fontWeight: '500',
    color: '#828282',
    marginTop: 8,
    marginBottom: 12
  },

  about: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4F4F4F',
    overflow: 'hidden',
  },

  p: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#828282',
    overflow: 'hidden',
  },

  informationButtonLike: {
    width: 32,
    alignItems: 'flex-start',
    paddingTop: 10,
  },

  footer: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdbdbd',
    borderTopStartRadius: 20,
    borderTopRightRadius: 20
  },

  footerButton: {
    height: 40,
    marginLeft: 38,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})