import EstyleSheet from 'react-native-extended-stylesheet';

const styles= EstyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  day:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'$white',
  },
  icon:{
    fontSize: 40,
    color: 'white',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  minMaxTempsContainer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  subText:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:'$white',

  }
});

export default styles;
