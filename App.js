import React, { Component } from "react";
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
      <BoxGreen/>
      <Profile/>
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

class BoxGreen extends Component {
  render(){
    return <Text>Ini Component dari Class</Text>
  }
}

class Profile extends Component {
  render(){
    return (
      <View>
        <Image
          source={{uri: 'https://loremflickr.com/320/240/Tech'}} 
          style={{ width: 100, height: 100, borderRadius: 50}}
          />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Text</Text>
      </View>
    )
  }
}

export default App;
