import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar, Dimensions} from 'react-native';

//const headerHeight= Dimensions.get('window').height/8;
const headerWidth= Dimensions.get('window').width;

const styles= EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //position: 'absolute',
    //left: 0,
    //right: 0,
    //top: 0,
    //add extra padding for ios only
    '@media ios':{
      paddingVertical: 20,
    },
    '@media android':{
      paddingVertical: StatusBar.currentHeight,
    },
    width: headerWidth,
  },
  leftButton:{
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  icon:{
    fontSize: 30,
    color: 'white',
  },
  headline:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cityName:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:20,
    color:'$white',
    alignSelf: 'center',
  },
  date:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:16,
    color:'$white',
    alignSelf: 'center',
  },
  rightButton:{
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
 });

 export default styles;