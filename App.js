import React,{ Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
      <View style={style.container}>
        <View style={style.container1}>
        <Text style={style.textDesign}>"Hello World!"</Text>
        <Image style={style.logo} source={logo} />
      </View>
        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FFFF",
    alignItems: 'center',
  },
  container1: {
    backgroundColor: "#00CCFF",
  },
  textDesign: {
    fontSize: 40 ,
    color:"#FF0",
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  }

});

export default App;