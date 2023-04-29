import React from 'react';
import { FlatList, Text } from 'react-native';

const libros = [
  { id: 1, titulo: 'El Señor de los Anillos' },
  { id: 2, titulo: 'Harry Potter y la piedra filosofal' },
  { id: 3, titulo: '1984' },
];

const ListaLibros = () => {
  return (
    <FlatList
      data={libros}
      renderItem={({ item }) => <Text>{item.titulo}</Text>}
      keyExtractor={item => item.id}
    />
  );
};

export default ListaLibros;
