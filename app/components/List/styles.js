import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

/*TODO: Build EStyleSheet with screen dimension in index.js, then remove Dimensions*/
const horizontalMargin= Dimensions.get('window').width/8;

export default EStyleSheet.create({
  //$underlayColor: '$border',
  container: {
    flexDirection: 'row',
    marginHorizontal: horizontalMargin,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: '$white',
  },
  timeContainer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hourText: {
    color: '$white',
    fontSize: 20,
  },
  dateText:{
    color: '$white',
    fontSize: 12,
  },
  separator: {
    backgroundColor: '$border',
    height: '$hairlineWidth',
    flex: 1,
    marginHorizontal: horizontalMargin,
  },
  weatherContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
    color: '$white',
  },
  tempText: {
    color: '$white',
    fontSize: 16,
  },
});