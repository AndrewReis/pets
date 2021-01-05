import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
 
import logo from '../../assets/logo.png';

import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';

export default function Dashboard(){

  const [pets, setPets] = useState([]);
  const [query, setQuery] = useState('');


  const filter = ['gato', 'cão', 'passaro', ''];

  useEffect(() => {
    async function getPetInAPI(){
      const response = await api.get(`/pets?species=${query}`)
      setPets(response.data);
    }

    getPetInAPI()
  }, [query]);

  function handleFilterPets(index){
    const filterPet = filter[index]
    console.log(query)
    setQuery(filterPet);
  }

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
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} onPress={ () => handleFilterPets(0)} >
            <Text style={styles.li}>Cats</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} onPress={ () => handleFilterPets(1)}>
            <Text style={styles.li} >Dogs</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} onPress={ () => handleFilterPets(2)}>
            <Text style={styles.li} >Birds</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.ul} activeOpacity={0.7} onPress={ () => handleFilterPets(3)}>
            <Text style={styles.li} >All</Text>
          </TouchableOpacity> 
        </View>
      </View>


      <FlatList 
        data={pets}
        keyExtractor={pets => pets.id}
        renderItem={( { item: pet } ) => (
          <View style={styles.informationContainer} key={pet.id} >
            <View style={styles.informationImage} >
              <Image source={pet.image} style={styles.informationImage} />
            </View>
            <View style={styles.informationPet}>
              <Text style={styles.title} > {pet.name} </Text>
              <Text style={styles.address} > {pet.city} </Text>
              <Text style={styles.about} > {pet.description} </Text>
            </View>
          </View>
        )}
      />

      {/* <ScrollView>
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
            </View>
         ))
       }
      </ScrollView> */}
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
  }
})