
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }
    search = (value) => {
        console.log("this is tsate", value)
        if(value.length>0){
            fetch(`https://swapi.co/api/planets/?search=${value}`)
            .then((res) => {
                return res.json();
            })
            .then((res)=>{   
                console.log(res);
                this.setState ({
                    planets: res.results
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
        
    }
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#3498db'}}>
        <Text>Search Screen</Text>
        <TextInput
        onChangeText={
            this.search
        }
        style={{height: 40,width:300,borderColor: 'gray', borderWidth: 1}}
        />
       
        {
            this.state.planets.length > 0 && this.state.planets.map((item)=>{
                return <Text  >{item.name}</Text>
            })
        }

      </View>
    );
  }
}