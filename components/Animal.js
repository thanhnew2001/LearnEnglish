import * as React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = (word) => {
    Speech.speak(word);
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={()=>speak('Tiger')}>
        <Text style={{fontSize:100}}> 🐅 </Text>
      </TouchableOpacity>


 <TouchableOpacity onPress={()=>speak('dog.')}>
        <Text style={{fontSize:100}}> 🐕 </Text>
      </TouchableOpacity>


 <TouchableOpacity onPress={()=>speak('cat.')}>
        <Text style={{fontSize:90}}> 🐈 </Text>
      </TouchableOpacity>

 <TouchableOpacity onPress={()=>speak('Gorilla.')}>
        <Text style={{fontSize:100}}> 🦍 </Text>
      </TouchableOpacity>


<TouchableOpacity onPress={()=>speak('eagle.')}>
        <Text style={{fontSize:100}}> 🦅 </Text>
      </TouchableOpacity>


 <TouchableOpacity onPress={()=>speak('spider..')}>
        <Text style={{fontSize:100}}> 🕷 </Text>
      </TouchableOpacity>


 <TouchableOpacity onPress={()=>speak('camel.')}>
        <Text style={{fontSize:100}}> 🐪 </Text>
      </TouchableOpacity>

    </View>
  );
}