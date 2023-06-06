/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */

import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ListaLibros from './components/bookList.js';

const PantallaPrincipal = () => {
  return (
    <View style={styles.container}>
      <Header style="font-size: 100px"/>
      
      <ListaLibros/>
    </View>
  );
};

const Header = () => {
  return(
    <View>
    <Text>Book Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 350,
    flex: 5,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50
  },
});

export default PantallaPrincipal;
