import EstyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const modalTopMargin= Dimensions.get('window').height/4;

const styles= EstyleSheet.create({
  container:{
    flex: 0.6,
    marginTop: modalTopMargin,
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
  },
  bodyText:{
    //marginTop: 30,
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:'$primaryBlue',
    alignSelf: 'center',
  },
  bodyTextBold:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:18,
    color:'$primaryBlue',
    alignSelf: 'center',
  },
  developerImage:{
    height: 100,
    width: 100,
  },
  button:{
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