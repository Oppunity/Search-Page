import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import RecommendedEventsScreen from "../screens/RecommendedEventsScreen";  
import PopularScreen from "../screens/PopularScreen";  
import SportsScreen from "../screens/SportsScreen";  


const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: {
            screen: RecommendedEventsScreen,
            navigationOptions: 
            {
                title: 'For you'}
             },

        Profile: {
            screen: PopularScreen,
            navigationOptions: 
            {
                title: 'Popular'}
             },
       
        Settings: {
            screen: SportsScreen,
            navigationOptions:
             {
                title: 'Sports'}
            },
    },

    { 
        tabBarOptions: {  
            activeTintColor: 'dodgerblue',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'dodgerblue',
        },
        },  
    }  
)  
export default createAppContainer(AppNavigator);  