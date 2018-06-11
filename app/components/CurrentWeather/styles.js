import EstyleSheet from 'react-native-extended-stylesheet';

const styles= EstyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  iconWeatherCondContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    //resizeMode: 'contain',
    fontSize: 30,
    color: 'yellow',
  },
  weatherCond:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'$white',
  },
  tempNumber:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:80,
    color:'$white',
    paddingLeft: 20,
  },
});

export default styles;