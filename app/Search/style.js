import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#F4F0EE',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F0EE',
  },
  searchIcon:{
    width:20,
    height:20,
    marginTop:7,
  },
  searchFieldContainer:{
    /*#6F1E51*/
    height: 40,
    borderColor: '#e74c3c',
    paddingTop:3,
    paddingLeft:10,
    marginTop : 20,
    borderWidth:0,
    width:Dimensions.get('window').width - 20,
    backgroundColor:'white',
    borderWidth:1,
    flexDirection:'row',
    borderRadius:3
  },
  segmentContainer:{
    height:30,
    paddingTop:0,
    paddingLeft:0,
    marginTop : 5,
    borderWidth:0,
    marginBottom:3,
    width:Dimensions.get('window').width - 20,
    backgroundColor:'#F4F0EE'
  },
  searchField:{
    marginLeft:7,
    flex:1,
    color:'#e74c3c',
    fontSize:14,
  },
  moviesList: {
    backgroundColor:'transparent',
    marginTop:15,
    width:Dimensions.get('window').width- 20,
    marginBottom:0,
    flex:1,
  },
  cardContainer: {
		flex: 1,
		marginHorizontal: 16,
    paddingBottom: 10
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 3,
		minHeight: 148,
		flexDirection: 'row',
		paddingRight: 16,
		overflow: 'hidden'
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1
	},
	cardImage: {

		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3,
    flex:1
	},
	cardTitle: {
		color: 'black',
		fontSize: 16,
		fontWeight: '500',
		paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontSize: 11,
		marginRight: 5
	},
	cardDescription: {
		color: '#636363',
		fontSize: 13,
		marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 0,
		fontSize: 12
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
  sectionHeader: {
     color: 'white',
     padding: 10,
     fontSize:15,
     fontWeight:'500',
     backgroundColor:'#e74c3c',
     marginBottom:10,
     opacity:0.9
  },
  gridView: {
    paddingTop: 15,
    flex: 1,
    backgroundColor : 'transparent'
  },
  itemContainer: {

    borderRadius: 5,

    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  gridMovieTitle:{
    width:200,
    fontSize:13,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:8,
    paddingRight:8,
    color:'white',
    backgroundColor:'#132336',
  },
  containerImage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    height: 170,
  },
  imageItself: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  textAbove: {
    textAlign: 'center',
    padding:3,
    backgroundColor: '#061c23',
    color:'white',
    fontSize:12,
    height:20
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e74c3c',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  activeTabStyle: {
    backgroundColor: '#e74c3c'
  },
  tabTextStyle: {
    color: '#e74c3c'
  },
});
