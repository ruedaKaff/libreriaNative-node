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
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ListaLibros from './components/bookList.js';

const BookStore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}></View>
      <Text style={styles.headerText}>Book Store</Text>
      <ListaLibros/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50
  },
  Header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BookStore;
