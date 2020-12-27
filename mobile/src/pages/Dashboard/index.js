import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import dog from '../../assets/dog.png';

export default function Dashboard(){

  const [ likePet, setLikePet ] = useState(false);

  function handleLikeThisPet(){
    if(!likePet){
      return setLikePet(true);
    }

    return setLikePet(false)
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <TouchableOpacity style={styles.ul} >
          <Text style={styles.li} >Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ul} >
          <Text style={styles.li} >Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ul} >
          <Text style={styles.li} >Birds</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.informationContainer}>
          <View style={styles.informationImage} >
            <Image source={dog} style={styles.informationImage} />
          </View>
          <View style={styles.informationPet}>
            <Text style={styles.title} >Nome do pet</Text>
            <Text style={styles.address} >Endereço</Text>
            <Text style={styles.about} >Taking care of a pet is my favorite, it helps me to... </Text>
          </View>
          <TouchableOpacity style={styles.informationButtonLike}>
            <Icon name="heart" size={20} onPress={handleLikeThisPet} color={ likePet ? "#FF4B33" : "#BDBDBD" } />
          </TouchableOpacity>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationImage} >
            <Image source={dog} style={styles.informationImage} />
          </View>
          <View style={styles.informationPet}>
            <Text style={styles.title} >Nome do pet</Text>
            <Text style={styles.address} >Endereço</Text>
            <Text style={styles.about} >Taking care of a pet is my favorite, it helps me to... </Text>
          </View>
          <TouchableOpacity style={styles.informationButtonLike}>
            <Icon name="heart" size={20} onPress={handleLikeThisPet} color={ likePet ? "#FF4B33" : "#BDBDBD" } />
          </TouchableOpacity>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationImage} >
            <Image source={dog} style={styles.informationImage} />
          </View>
          <View style={styles.informationPet}>
            <Text style={styles.title} >Nome do pet</Text>
            <Text style={styles.address} >Endereço</Text>
            <Text style={styles.about} >Taking care of a pet is my favorite, it helps me to... </Text>
          </View>
          <TouchableOpacity style={styles.informationButtonLike}>
            <Icon name="heart" size={20} onPress={handleLikeThisPet} color={ likePet ? "#FF4B33" : "#BDBDBD" } />
          </TouchableOpacity>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationImage} >
            <Image source={dog} style={styles.informationImage} />
          </View>
          <View style={styles.informationPet}>
            <Text style={styles.title} >Nome do pet</Text>
            <Text style={styles.address} >Endereço</Text>
            <Text style={styles.about} >Taking care of a pet is my favorite, it helps me to... </Text>
          </View>
          <TouchableOpacity style={styles.informationButtonLike}>
            <Icon name="heart" size={20} onPress={handleLikeThisPet} color={ likePet ? "#FF4B33" : "#BDBDBD" } />
          </TouchableOpacity>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.informationImage} >
            <Image source={dog} style={styles.informationImage} />
          </View>
          <View style={styles.informationPet}>
            <Text style={styles.title} >Nome do pet</Text>
            <Text style={styles.address} >Endereço</Text>
            <Text style={styles.about} >Taking care of a pet is my favorite, it helps me to... </Text>
          </View>
          <TouchableOpacity style={styles.informationButtonLike}>
            <Icon name="heart" size={20} onPress={handleLikeThisPet} color={ likePet ? "#FF4B33" : "#BDBDBD" } />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: '#fff',
    width: '100%',
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 36,
  },

  ul: {
    width: 76,
    height: '100%',
    backgroundColor: '#f5f5fa',
    borderRadius: 16,

    alignItems: 'center',
    justifyContent: 'center'
  },

  li: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9999c7',


  },

  informationContainer: {
    backgroundColor: '#fff',
    width: 327,
    height: 130,
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 27
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

  informationButtonLike: {
    width: 32,
    alignItems: 'flex-start',
    paddingTop: 10,
  }
})