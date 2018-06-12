import EstyleSheet from 'react-native-extended-stylesheet';

const styles= EstyleSheet.create({
  container:{
    flex: 0.50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //height: 200,
  },
  iconWeatherCondContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    //resizeMode: 'contain',
    fontSize: 40,
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
  subWeatherDetailsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  twoTextsCol:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  subText:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:'$white',
  }
});

export default styles;