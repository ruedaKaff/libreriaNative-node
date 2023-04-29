import React from 'react';
import { View } from 'react-native';
import ListaLibros from './components/bookList.js';

const PantallaPrincipal = () => {
  return (
    <View>
      <ListaLibros />
    </View>
  );
};

export default PantallaPrincipal;
