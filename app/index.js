import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native'
import Search from './Search/Search.js'

import { createStackNavigator } from 'react-navigation';

console.disableYellowBox = true

export default class MovieDB extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <RootStack/>
    );
  }
}

const RootStack = createStackNavigator({
    Search: Search,
  },{
    initialRouteName: 'Search',
    
    navigationOptions: {
      title: 'Movies',
      headerStyle: {
        backgroundColor: '#061c23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
