import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  poster:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width - 80,
    resizeMode: 'contain',
    backgroundColor: '#121212',
    marginTop:20
  },
  titleContainer:{
    position:'absolute',
    top:Dimensions.get('window').width- 80 - 70,
    width: Dimensions.get('window').width,
    height:100,
    flexDirection:'row',
  },
  movieTitle: {
    flex:1,
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    paddingLeft:20,
    paddingTop:20,
    paddingRight:20,
  },
  movieOverview:{
    flex:1,
    marginLeft:20,
    marginTop:12,
    marginBottom:20,
    marginRight:20,
    fontSize:15,
    color:'#8d8b89',
  },
});
