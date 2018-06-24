import EstyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const verticalMargin= Dimensions.get('window').height/8;
const horizontalMargin= Dimensions.get('window').width/8;

const styles= EstyleSheet.create({
  container:{
    flex: 1,
    marginVertical: verticalMargin,
    marginHorizontal: horizontalMargin,
    paddingVertical:10,
    backgroundColor: '$white',
    borderRadius:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyTextContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bodyText:{
    //marginTop: 30,
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:'$primaryBlue',
    alignSelf: 'center',
  },
  icon: {
    fontSize: 40,
    color: '$primaryBlue',
  },
  bodyTextBold:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:14,
    color:'$primaryBlue',
  },
  developerImage:{
    height: 100,
    width: 100,
  },
  button:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:20,
    color:'$primaryBlue',
    alignSelf: 'center',
  },
});

export default styles;