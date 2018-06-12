import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageHeight= Dimensions.get('window').height;
const imageWidth= Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'space-between',
    //backgroundColor: '$primaryBlue',
  },
  backgroundImage:{
    height: imageHeight,
    width: imageWidth,
  }
});