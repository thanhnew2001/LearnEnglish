import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Car from './components/Car'
import Fruit from './components/Fruit'
import Color from './components/Color'
import Fastfood from './components/Fastfood'
import Seafood from './components/Seafood'
import Animal from './components/Animal'
import { useState } from 'react';


export default function App() {

  const [page, setPage] = useState('Home')


  return (
    <View style={styles.container}>

      <View style={{ flex: 0.1, flexDirection: "row", alignItems: 'center', flexWrap: 'wrap' }}>
        <Button title='Car' onPress={()=>setPage('Car')}/>
        <Button title='Fruit' onPress={()=>setPage('Fruit')}/>
        <Button title='Fastfood' onPress={()=>setPage('Fastfood')}/>
        <Button title='Seafood' onPress={()=>setPage('Seafood')}/>
        <Button title='Animal' onPress={()=>setPage('Animal')}/>
        <Button title='Color' onPress={()=>setPage('Color')}/>
      </View>
        {page==='Car'? <Car/>: null}
        {page==='Fruit'? <Fruit/>: null}
        {page==='Fastfood'? <Fastfood/>: null}
        {page==='Seafood'? <Seafood/>: null}
        {page==='Animal'? <Animal/>: null}
        {page==='Color'? <Color/>: null}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
