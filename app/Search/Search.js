import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Animated,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  Dimensions,
  ScrollView,
  SegmentedControlIOS
} from 'react-native';
import {styles} from './style.js';
import {getMoviesFromApiAsync} from '../api/apiManager.js';
import {API_CONSTANTS} from '../api/apiConstants.js';
import { SuperGridSectionList } from 'react-native-super-grid';
import SegmentControl from 'react-native-segment-controller';

const SEARCH_ICON_SRC = require('../Resources/images/search.png')
const empty_search_string = " "


export default class Search extends Component {
 constructor(props){
    super(props);
    // Initialize Default state
    this.state = {
      keyword:'',
      selectedSegmentIndex:0,
      sections:[],
    }

  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <View style = {styles.searchFieldContainer}>
            <Image
              style={styles.searchIcon}
              source={SEARCH_ICON_SRC}/>
            <TextInput
              style = {styles.searchField}
              onChangeText= {(keyword) => this.refreshList(keyword)}
              placeholder = "Search Movies..."
              placeholderTextColor = "#8d8b89"
              returnKeyType = {"done"}
              text = {this.state.keyword}>
            </TextInput>
          </View>
          <View style = {styles.segmentContainer}>
            <SegmentedControlIOS
              values={['Rating', 'Year']}
              selectedIndex={this.state.selectedIndex}
              tintColor = '#061c23'
              onChange={(event) => {
                this.setState({selectedSegmentIndex: event.nativeEvent.selectedSegmentIndex});
                /*this.refreshList(this.state.keyword)*/
              }}
            />
          </View>
        </View>
            <ScrollView>
              {this.state.sections.map((item) => this.viewItems(item))}
            </ScrollView>
          </View>


      );
  }

    refreshList = (keyword) => {
      const self = this
      if (keyword.trim() == "") {
      /* no movies, in case the search string is empty */
      keyword = empty_search_string
    }

    self.setState({keyword})
    getMoviesFromApiAsync(keyword, this, this.state.selectedSegmentIndex)
  }

  viewItems = (item) => {

      return(this.renderGrid(item));
  }

  showMovieList(){
    return(
      this.renderGrid()
    )
  }

  renderGrid(item){

     return (<SuperGridSectionList

       sections={[item]}
       style={styles.gridView}
       renderItem={({ item }) => (
         <View style={[styles.containerImage, { backgroundColor: 'transparent' }]}>
            <Image source={{uri: API_CONSTANTS.POSTER_PATH_BASE_URL + item[API_CONSTANTS.POSTER_PATH]}} style={styles.imageItself}/>
            <Text style = {styles.textAbove} numberOfLines= {1}>
              {item[API_CONSTANTS.TITLE]}
            </Text>
         </View>
       )}
       renderSectionHeader={({ section }) => (
         <Text style={{ color: 'green', padding: 10, fontSize:15, fontWeight:'500', backgroundColor:'#061c23', marginBottom:10 }}>{section.title}</Text>
       )}
       />)

    }
  /*<Text style={styles.itemName}>{item.name}</Text>
  <Text style={styles.itemCode}>{item.code}</Text>*/

  renderRow = ({item}) => {
    return (
			<View style={styles.cardContainer}>

					<View style={styles.card}>
						<Image source={{uri: API_CONSTANTS.POSTER_PATH_BASE_URL + item[API_CONSTANTS.POSTER_PATH]}} style={styles.cardImage}/>
						<View style={styles.cardDetails}>
							<Text
								style={styles.cardTitle}
								numberOfLines={3}>
								{item[API_CONSTANTS.TITLE]}
							</Text>
							<View style={styles.cardGenre}>
								<Text style={styles.cardGenreItem}>{item[API_CONSTANTS.RELEASE_DATE].substring(0, 4)}</Text>
							</View>
							<View style={styles.cardNumbers}>
								<View style={styles.cardStar}>
                  <Image source={require('../Resources/images/star.png')}/>
									<Text style={styles.cardStarRatings}>{" " + item[API_CONSTANTS.VOTE_AVERAGE]}</Text>
								</View>
								<Text style={styles.cardRunningHours} />
							</View>
							<Text style={styles.cardDescription} numberOfLines={3}>
								{item[API_CONSTANTS.OVERVIEW]}
							</Text>
						</View>
					</View>

			</View>
		);
  }
  onRowTap = (item) => {

  }
}
