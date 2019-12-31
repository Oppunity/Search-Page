import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/Ionicons';  
import { SearchBar } from 'react-native-elements';
import AppNavigator from './src/lib/router';  


const AppIndex = createAppContainer(AppNavigator) 


  
export default class App extends Component{ 
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;


        return(  

          <View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>

                <View style = {styles.top}> 
                
                <View style = {styles.searchBar}>
               <SearchBar 
                placeholder="Explore the campus..."
                round
                fontColor="dodgerblue"
                containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 10}}
                
                onChangeText={this.updateSearch}
                value={search} /> 
                </View>
                </View>   

                   
                  <View style = {styles.tabBar}> 

                      <AppIndex/>  

                  </View>
            </View>  

        )  
    }  
}  
const styles = StyleSheet.create({  
    
    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },
    
   
    searchBar: {
      
     borderRadius: 20,
     alignContent: 'center',
     width: 300,
     top: 20,
    
        
    },

    tabBar: {
      top: 40,
      height: 100 + '%'  
    },
    
    
    top:
    {
     top: 55,
     width: 300,
     height: 50,
     flexDirection: 'row',
     justifyContent: 'center',
     left: 32,
     top:22,
     
    }

     
});  
