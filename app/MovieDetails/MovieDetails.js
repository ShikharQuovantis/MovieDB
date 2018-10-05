import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
import {
  styles
} from './style.js';
import {
  API_CONSTANTS
} from '../api/apiConstants.js';


export default class MovieDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Details'),
    };
  };
  render() {
    const { navigation } = this.props;
    const movieDetails = navigation.state.params;

    return (
      <View style = {styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <Image
            style={styles.poster}
            source={{uri:API_CONSTANTS.POSTER_PATH_BASE_URL + movieDetails[API_CONSTANTS.POSTER_PATH]}}
          />
          <Text
            style = {styles.movieTitle}
            numberOfLines={2}>
                {movieDetails[API_CONSTANTS.TITLE]}
          </Text>
          <Text
             style = {styles.movieOverview}>
               {movieDetails[API_CONSTANTS.OVERVIEW]}
          </Text>
        </ScrollView>

      </View>
    );
  }
}
