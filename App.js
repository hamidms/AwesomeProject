import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: "#0abde3"}}/>
      <Text>Hamid</Text>
      <Text>Machfudin</Text>
      <Hamid/>
      <Photo/>
      <TextInput style={{borderWidth: 1}} />
    </View>
  )
}

const Hamid = () => {
  return <Text>Sukardi Ok</Text>
}

const Photo = () => {
  return <Image 
    source={{uri: 'https://loremflickr.com/320/240'}} 
    style={{ width: 100, height: 100}}
  />
}

export default App;
