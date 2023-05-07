import React, {useState, useEffect} from 'react';
import { FlatList, Text } from 'react-native';
import { API_URL } from '../common/connection';

const libros = [
  { id: 1, titulo: 'El Señor de los Anillos' },
  { id: 2, titulo: 'Harry Potter y la piedra filosofal' },
  { id: 3, titulo: '1984' },
];

/* const ListaLibros = () => {
  return (
    <FlatList
      data={libros}
      renderItem={({item}) => <Text>{item.titulo}</Text>}
      keyExtractor={item => item.id}
    />
  );
};
 */

const ListaLibros = () => {
   const [libros, setLibros] = useState([]);

   useEffect(()=> {

    fetch(`${API_URL}/book`)
    .then(response => response.json())
    .then(data => setLibros(data))
    .catch(error => console.log(error));
   
},[]);
return (

  
<FlatList
      data={libros}
      renderItem={({ item }) => <Text>{item.title_book}</Text>}
    
      
      keyExtractor={item => item.id_book}
  />


  );
};


export default ListaLibros;
