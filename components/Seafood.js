 
import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';
 
export default function App() {
  const speak = (word) => {
    Speech.speak(word);
  };
 
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={()=>speak('octopus.')}>
        <Text style={{fontSize:100}}>🐙  </Text>
      </TouchableOpacity>


 
   <TouchableOpacity onPress={()=>speak('squid.')}>
        <Text style={{fontSize:100}}> 🦑 </Text>
      </TouchableOpacity>
 
 


   <TouchableOpacity onPress={()=>speak('shrimp.')}>
        <Text style={{fontSize:100}}> 🦐 </Text>
      </TouchableOpacity>
 
 


   <TouchableOpacity onPress={()=>speak('lobster.')}>
        <Text style={{fontSize:100}}> 🦞 </Text>
      </TouchableOpacity>
 
 


   <TouchableOpacity onPress={()=>speak('crab.')}>
        <Text style={{fontSize:100}}> 🦀 </Text>
      </TouchableOpacity>
 
 


   <TouchableOpacity onPress={()=>speak('fish.')}>
        <Text style={{fontSize:100}}> 🐟 </Text>
      </TouchableOpacity>
 
 


 
 
    </View>
  );
}
 
 