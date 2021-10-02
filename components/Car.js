 
import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';
 
export default function Car() {
  const speak = (word) => {
    Speech.speak(word);
  };
 
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={()=>speak('car.')}>
        <Text style={{fontSize:100}}> 🚗 </Text>
      </TouchableOpacity>


<TouchableOpacity onPress={()=>speak('taxi.')}>
        <Text style={{fontSize:100}}> 🚕 </Text>
      </TouchableOpacity>


<TouchableOpacity onPress={()=>speak('policecar.')}>
        <Text style={{fontSize:100}}> 🚓 </Text>
      </TouchableOpacity>



 <TouchableOpacity onPress={()=>speak('ambulance.')}>
        <Text style={{fontSize:100}}> 🚑 </Text>
      </TouchableOpacity>



 <TouchableOpacity onPress={()=>speak('firetruck.')}>
        <Text style={{fontSize:100}}> 🚒 </Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>speak('trunk.')}>
        <Text style={{fontSize:100}}> 🚚 </Text>
      </TouchableOpacity>                      
 


  <TouchableOpacity onPress={()=>speak('motorcycle.')}>
        <Text style={{fontSize:100}}> 🛵 </Text>
      </TouchableOpacity>                      
 


  <TouchableOpacity onPress={()=>speak('bike.')}>
        <Text style={{fontSize:100}}> 🚲 </Text>
      </TouchableOpacity>                      
 
    </View>
  );
}
 
 