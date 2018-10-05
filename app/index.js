import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native'
import Search from './Search/Search.js'

import { createStackNavigator } from 'react-navigation';
import MovieDetails from './MovieDetails/MovieDetails.js'

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
    MovieDetails: MovieDetails,
  },{
    initialRouteName: 'Search',
    /*FF316D*/
    navigationOptions: {
      title: 'Movies',
      headerStyle: {
        backgroundColor: '#e74c3c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
