import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground, 
  StyleSheet,
  TouchableHighlight, 
  Alert
} from 'react-native';

export default class LoginView extends Component {
  onLogin(){
    Alert.alert(
      'Acceso',
      'Te has loggeado en el sistema'
    )
  }
  render() {
    return (
      <ImageBackground
          style={styles.container}
          source={{uri: 'https://images.unsplash.com/photo-1451847487946-99830706c22d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=51b29b6d3a3fbb80cc6d1e26ccfb340c&auto=format&fit=crop&w=634&q=80'}}
      >
      <View>
      

        <Text style={styles.title}>
          HEROES
        </Text>

        <TouchableHighlight 
        style={styles.boton}
        onPress={(this.onLogin.bind(this))}>

          <Text 
          style={styles.textBoton}> 
          Botón Login 
          </Text>
        </TouchableHighlight>

      </View>
      </ImageBackground>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'black',
    color: 'white'
  },
  boton: {
    width: 300,
    height: 30,
    backgroundColor: 'red', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 10, 
    marginBottom: 10, 
    borderRadius: 8, 
    borderWidth: 1
  },
  textBoton: {
    color: 'white'
  }
}); 