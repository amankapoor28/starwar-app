/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

 


export default class LoginScreen extends Component<Props> {

  constructor(props: Props) { 
    super(props); 
    this.state = { 
      user: '',
      password: '', 
      isPasswordHidden: true, 
      toggleText: 'Show', 
    }; 
} 
  
  handleClick = () => {
    console.log("this is tsate", this.state)
    if (this.state.user === 'found'){
       this.setState({myUser: 'not-found'});
    } else {
       this.setState({myUser: 'found'});
    }
    fetch(`https://swapi.co/api/people/?search=${this.state.user}`)
    .then((res) => {
      return res.json();
    })
    .then((res)=>{
      let user = res.results[0];
      console.log(res.results[0]);
      if(user && user.name === this.state.user && user.birth_year === this.state.password){
        this.props.navigation.navigate('Home')
      }
    })
}

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput 
        placeholder="username"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
        onChangeText={(value)=>{
          this.setState({
            user: value
          })
        }}
        value={this.state.user}
        />
        <TextInput
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
        onChangeText={(value)=>{
          this.setState({
            password: value
          })
        }}
        secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => this.handleClick()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 20,

  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom :15,
    width:300,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    width:100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
