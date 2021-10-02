 
import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';
 
export default function App() {
  const speak = (word) => {
    Speech.speak(word);
  };
 
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={()=>speak('hotdog.')}>
        <Text style={{fontSize:100}}> 🌭 </Text>
      </TouchableOpacity>



       <TouchableOpacity onPress={()=>speak('hamburger.')}>
        <Text style={{fontSize:100}}> 🍔 </Text>
      </TouchableOpacity>




       <TouchableOpacity onPress={()=>speak('French fries.')}>
        <Text style={{fontSize:100}}> 🍟 </Text>
      </TouchableOpacity>



       <TouchableOpacity onPress={()=>speak('pizza.')}>
        <Text style={{fontSize:100}}> 🍕 </Text>
      </TouchableOpacity>



       <TouchableOpacity onPress={()=>speak('fried chicken.')}>
        <Text style={{fontSize:100}}> 🍗 </Text>
      </TouchableOpacity>



       <TouchableOpacity onPress={()=>speak('coke.')}>
        <Text style={{fontSize:100}}>   🥤</Text>
      </TouchableOpacity>



      
 
    </View>
  );
}
 
 

