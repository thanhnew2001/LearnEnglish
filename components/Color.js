  
import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';
 
export default function App() {
  const speak = (word) => {
    Speech.speak(word);
  };
 
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
     


   <TouchableOpacity onPress={()=>speak('Red Heart.')}>
        <Text style={{fontSize:100}}> ❤️ </Text>
      </TouchableOpacity>
 


   <TouchableOpacity onPress={()=>speak('Orange Heart.')}>
        <Text style={{fontSize:100}}> 🧡 </Text>
      </TouchableOpacity>
 


   <TouchableOpacity onPress={()=>speak('Yellow Heart.')}>
        <Text style={{fontSize:100}}> 💛 </Text>
      </TouchableOpacity>
 


   <TouchableOpacity onPress={()=>speak(' Green Heart.')}>
        <Text style={{fontSize:100}}> 💚 </Text>
      </TouchableOpacity>
 


   <TouchableOpacity onPress={()=>speak(' blue Heart.')}>
        <Text style={{fontSize:100}}> 💙  </Text>
      </TouchableOpacity>
 


   <TouchableOpacity onPress={()=>speak(' Purple Heart.')}>
        <Text style={{fontSize:100}}> 💜 </Text>
      </TouchableOpacity>
 


  <TouchableOpacity onPress={()=>speak('Black Heart.')}>
        <Text style={{fontSize:100}}> 🖤 </Text>
      </TouchableOpacity>
 

  <TouchableOpacity onPress={()=>speak(' White Heart.')}>
        <Text style={{fontSize:100}}> 🤍 </Text>
      </TouchableOpacity>
 


  <TouchableOpacity onPress={()=>speak('Brown Heart.')}>
        <Text style={{fontSize:100}}> 🤎  </Text>
      </TouchableOpacity>
 

  <TouchableOpacity onPress={()=>speak('pink heart.')}>
        <Text style={{fontSize:100}}> 💖 </Text>
      </TouchableOpacity>
    </View>
  );
}
 
 