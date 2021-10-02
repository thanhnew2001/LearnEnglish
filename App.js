import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Car from './components/Car';
import Fruit from './components/Fruit';
import Color from './components/Color';
import Fastfood from './components/Fastfood';
import Seafood from './components/Seafood';
import Animal from './components/Animal';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('Car');

  return (
    <View style={styles.container}>
      {page === 'Car' ? <Car /> : null}
      {page === 'Fruit' ? <Fruit /> : null}
      {page === 'Fastfood' ? <Fastfood /> : null}
      {page === 'Seafood' ? <Seafood /> : null}
      {page === 'Animal' ? <Animal /> : null}
      {page === 'Color' ? <Color /> : null}

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
       

  <TouchableOpacity onPress={()=>setPage('Car')}>
        <Text style={styles.button}> Car </Text>
      </TouchableOpacity>       

      <TouchableOpacity onPress={()=>setPage('Animal')}>
        <Text style={styles.button}> Animal </Text>
      </TouchableOpacity>       

      <TouchableOpacity onPress={()=>setPage('Fruit')}>
        <Text style={styles.button}> Fruit </Text>
      </TouchableOpacity>       

      <TouchableOpacity onPress={()=>setPage('Fastfood')}>
        <Text style={styles.button}> Fastfood </Text>
      </TouchableOpacity>       

      <TouchableOpacity onPress={()=>setPage('Color')}>
        <Text style={styles.button}> Color </Text>
      </TouchableOpacity>       

      <TouchableOpacity onPress={()=>setPage('Seafood')}>
        <Text style={styles.button}> Seafood </Text>
      </TouchableOpacity>       
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  button: {
    backgroundColor: 'transparent',
    opacity: 0.7,
    fontSize: 12,
    marginBottom:20
  },
});
