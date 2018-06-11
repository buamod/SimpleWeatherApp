import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles= EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    //add extra padding for ios only
    '@media ios':{
      paddingTop: 20,
    },
    '@media android':{
      paddingTop: StatusBar.currentHeight,
    },
    backgroundColor: '$primaryBlue',
    height: 70,
  },
  button:{
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  icon:{
    width: 40,
  },
  cityName:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:35,
    color:'$white',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  }
 });

 export default styles;