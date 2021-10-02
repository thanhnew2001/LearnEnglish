import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = (word) => {
    Speech.speak(word);
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={()=>speak('Apple')}>
        <Text style={{fontSize:100}}> 🍎 </Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>speak('Orange')}>
        <Text style={{fontSize:100}}> 🍊 </Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>speak('Banana')}>
        <Text style={{fontSize:100}}> 🍌 </Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>speak('Water melon')}>
        <Text style={{fontSize:100}}> 🍉 </Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>speak('Grape')}>
        <Text style={{fontSize:100}}> 🍇 </Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>speak('Strawberry')}>
        <Text style={{fontSize:100}}> 🍓 </Text>
      </TouchableOpacity>

         <TouchableOpacity onPress={()=>speak('Avocado')}>
        <Text style={{fontSize:100}}> 🥑 </Text>
      </TouchableOpacity>

    </View>
  );
}