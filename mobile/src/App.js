import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import Dashboard from './pages/Dashboard';
// import api from './services/api';

export default function App() {

  // const [pets, setPets] = useState([]);

  // useEffect(() => {
  //   async function getPetInAPI(){
  //     const response = await api.get('/pets')
  //     setPets(response.data);
  //   }

  //   getPetInAPI()
  // }, []);
  return(
    <SafeAreaView style={styles.container} >
     <Dashboard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FA'
  }
})